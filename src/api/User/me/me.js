import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const cards = await prisma.user({ id: user.id }).cards();
      return {
        user: userProfile,
        cards
      };
    }
  }
};
