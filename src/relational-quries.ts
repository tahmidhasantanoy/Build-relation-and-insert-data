import { PrismaClient } from "../generated/prisma";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

const relationalQueries = async () => {
  //fluent api : Find data in test table, But depend on test table we retrive data from another table.
  //   const allUsers = await prisma.user
  //     .findUnique({
  //       where: { id: 2 },
  //     })
  //     .userAndpost();

  // inclue query
  const usersData = await prisma.user.findUnique({
    where: { id: 1 },
    include: { userAndpost: true, userAndprofile: true },
  });

  //   Want to find post's user information where published = true
  const publishedPostUser = await prisma.user.findMany({
    // with this `include`
    include: {
      userAndpost:
        // Now, i enter into post table
        {
          where: {
            userId: 2,
            published: true,
          },
        },
    },
  });

  console.dir(publishedPostUser, { depth: Infinity });
};

relationalQueries();
