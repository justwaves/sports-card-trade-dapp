import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullCard: async (_, args) => {
      const { id } = args;
      return prisma.card({ id });
    }
  }
};
