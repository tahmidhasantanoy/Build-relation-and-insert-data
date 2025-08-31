import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const rawQuery = async() => {
    const posts = await prisma.$queryRaw `SELECT * FROM "Post" Where published = true`

    console.log(posts);
}

rawQuery()