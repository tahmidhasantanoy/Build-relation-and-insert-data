import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const filter = async () => {
  //   const andFilteredData = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains : "title"
  //           },
  //
  //         },
  //   {
  //     published: true,
  //   }
  //       ],
  //     },
  //   });

  //   const orFilterData = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           published: true,
  //         },
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //         },
  //       ],
  //     },
  //   });

//   const notFilteringData = await prisma.post.findMany({
//     where: {
//       NOT: [
//         {
//           published: false,
//         },
//         {
//           authorId: 12,
//         },
//       ],
//     },
//   });

const startWith = await prisma.post.findMany({
    where : {
        title : {
            startsWith : "This"
        }
    }
})
  console.log(startWith);
};

filter();
