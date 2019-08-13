import { prisma } from "../../../generated/prisma-client";

export default {
  Like: {
    card: ({ id }) => prisma.like({ id }).card(),
    user: ({ id }) => prisma.like({ id }).user()
  }
};
