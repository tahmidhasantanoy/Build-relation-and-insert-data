import { PrismaClient } from "../generated/prisma";

// instance of prismaClient
const prisma = new PrismaClient();

const aggregation = async () => {
  const avgCalculate = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
    _sum: {
      age: true,
    },
    _count: {
      age: true,
    },
    _max: {
      age: true,
    },
    _min: {
      age: true,
    },
  });

  console.log(avgCalculate._avg.age);
  console.log(avgCalculate._sum.age);
  console.log(avgCalculate._count.age);
  console.log(avgCalculate._min.age);
  console.log(avgCalculate._max.age);
};

aggregation();
