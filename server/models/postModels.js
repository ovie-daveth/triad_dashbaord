// postModel.js (example)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (data) => {
  return await prisma.post.create({ data });
};

export const findAllPosts = async () => {
  return await prisma.post.findMany();
};

export const findOnePost = async (id) => {
  return await prisma.post.findUnique({
    where: { id: parseInt(id) }, // Ensure the ID is parsed correctly
  });
};

export const updatePost = async (id, data) => {
  return await prisma.post.update({
    where: { id: parseInt(id) },
    data,
  });
};

export const deletePost = async (id) => {
  return await prisma.post.delete({
    where: { id: parseInt(id) },
  });
};
