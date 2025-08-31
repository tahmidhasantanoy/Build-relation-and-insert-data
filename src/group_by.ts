import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const groupByOperations = async () => {
  const groupBy = await prisma.user.groupBy({
    by: "age",
    having: {
      age: {
        _min: {
          gt: 20,
        },
      },
    },
  });
  console.log(groupBy);
};

groupByOperations();
