import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

console.log("Transaction Operation");

const transactionOperation = async () => {
  try {
    const create = prisma.user.create({
      data: {
        username: "Tahmid Hasan",
        email: "tahmid.hasan@example.com",
        age: 30,
      },
    });

    const update = prisma.user.update({
      where: {
        id: 3,
      },
      data: {
        age: 31,
      },
    });

    const [createUser, updateUser] = await prisma.$transaction([
      create,
      update,
    ]);
    console.log(createUser, updateUser);
  } catch (err) {
    console.log(err);
  }
};

transactionOperation();
