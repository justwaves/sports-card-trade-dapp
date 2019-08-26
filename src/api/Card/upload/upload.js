import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { playerName } = args;
      const card = await prisma.createCard({
        player: {
          connect: {
            playerName: playerName
          }
        },
        user: {
          connect: {
            id: user.id
          }
        }
      });
      return card;
    }
  }
};
