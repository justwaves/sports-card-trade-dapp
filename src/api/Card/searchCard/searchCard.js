import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchCard: async (_, args) =>
      prisma.cards({
        where: {
          OR: [{ playerName_starts_with: args.term }]
        }
      })
  }
};
