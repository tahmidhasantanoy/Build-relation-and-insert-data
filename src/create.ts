// import { PrismaClient } from "@prisma/client";
// But you import from @prisma/client
/* @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again. */
import { PrismaClient } from "../generated/prisma";
const Prisma = new PrismaClient();

const main = async () => {
  // const createUser = await Prisma.user.create({
  // // user = is your schema model, create = is prisma method
  //   data: {
  //     username: "john_toe",
  //     email: "john_toe@example.com",
  //     role: "user",
  //   },
  // });
  // console.log(createUser);

  // const createProfile = await Prisma.profile.create({
  //   data : {
  //     bio : "Dream to be a Software Engineer",
  //     userId : 1
  //   }
  // })

  // console.log(createProfile);

  // const createCategory = await Prisma.category.create({
  //   data : {
  //     name : "programming"
  //   }
  // })

  // console.log(createCategory);

  // Create post with relation to user and post_category to category
  // const createPost = await Prisma.post.create({
  //   data: {
  //     title: "This is title 12",
  //     content: "This is content",
  //     published: true,
  //     authorId: 12,
  //     userId: 2,
  //     // Write nested relation via post_category to category here
  //     post_categoryAndpost: {
  //       // With `create` keyword to create join with post_category
  //       create: [
  //         {
  //           // This field from post_category
  //           post_categoryAndcategory: {
  //             connect: {
  //               id: 6,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // console.log(createPost);
};

main();
