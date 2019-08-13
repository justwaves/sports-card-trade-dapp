import { prisma } from "../../../generated/prisma-client";

export default {
  Comment: {
    user: ({ id }) => prisma.comment({ id }).user(),
    card: ({ id }) => prisma.comment({ id }).card()
  }
};
