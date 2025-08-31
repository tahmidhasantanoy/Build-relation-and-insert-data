import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

console.log("Transaction Operation");

const transactionOperation = async () => {
  // Batch transaction
  //   try {
  //     // query-1
  //     const create = prisma.user.create({
  //       data: {
  //         username: "Tahmid Hasan",
  //         email: "tahmid.hasan@example.com",
  //         age: 30,
  //       },
  //     });

  //     // query-2
  //     const update = prisma.user.update({
  //       where: {
  //         id: 3,
  //       },
  //       data: {
  //         age: 31,
  //       },
  //     });

  //     // Batch transaction
  //     const [createUser, updateUser] = await prisma.$transaction([
  //       create,
  //       update,
  //     ]);
  //     console.log(createUser, updateUser);
  //   } catch (err) {
  //     console.log(err);
  //   }

  // interactive transaction
  /* $ means api */
  const interactiveTransaction = await prisma.$transaction(async (tx) => {
    // Query-1
    const createUser = await tx.user.create({
      data: {
        username: "Tahmid Hasan tanoy",
        email: "tahmid.hasan.tanoy@example.com",
        age: 24,
        role: "admin",
      },
    });

    // Query-2
    const updateUser = await tx.user.update({
      where: {
        id: 3,
      },
      data: {
        age: 25,
      },
    });

    // Query-3
    const deleteUser = await tx.user.delete({
      where: {
        id: 4,
      },
    });
    return updateUser;
  });

  console.log(interactiveTransaction);
};

transactionOperation();
