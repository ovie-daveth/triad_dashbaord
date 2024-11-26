import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 
  // Create user by ID
  export const registerUser = async (data) => {
    return await prisma.user.create({ data });
  }

  //Find all Users
  export const findAll = async () => {
    return await prisma.user.findMany({
      include: { posts: true },
    });
  }
  // Fetch user by ID
  export const findById = async (id) => {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) }
    });
  }

   // Update user 
   export const UpdateUser = async (id, data) => {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  // Update user post count
  export const updatePostCount = async (id, increment = 1) => {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data: { postCount: { increment } },
    });
  }
