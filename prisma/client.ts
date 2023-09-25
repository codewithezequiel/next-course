import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();



if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Any time we create or change a model and then create a migration, Prisma CLI
// regenerates this Prisma Client so that it is always in sync with our models.
// Best practice to make sure there is a single instance of Prisma Client running in the
// app.
