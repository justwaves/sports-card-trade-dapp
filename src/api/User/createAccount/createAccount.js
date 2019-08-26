import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, fullName = "", bio = "" } = args;
      const user = await prisma.createUser({
        username,
        email,
        fullName,
        bio
    });
    console.log(user);
    return user;
    }
  }
};
