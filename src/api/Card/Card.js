import { prisma } from "../../../generated/prisma-client";

export default {
  Card: {
    files: ({ id }) => prisma.card({ id }).files(),
    comments: ({ id }) => prisma.card({ id }).comments(),
    user: ({ id }) => prisma.card({ id }).user(),
    likes: ({ id }) => prisma.card({ id }).likes(),
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            card: {
              id
            }
          }
        ]
      });
    },
    likeCount: parent =>
      prisma
        .likesConnection({
          where: { card: { id: parent.id } }
        })
        .aggregate()
        .count()
  }
};
