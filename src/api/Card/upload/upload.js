import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { caption, files } = args;
      const card = await prisma.createCard({
        caption,
        user: {
          connect: {
            id: user.id
          }
        }
      });
      files.forEach(
        async file =>
          await prisma.createFile({
            url: file,
            card: {
              connect: {
                id: card.id
              }
            }
          })
      );
      return card;
    }
  }
};
