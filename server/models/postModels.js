const { PrismaClient } = require("@prisma/client");



const prisma = new PrismaClient();

const PostModel = {
  // Create a post
  create: async (data) => {
    return await prisma.post.create({ data });
  },

  // Fetch all posts
  findAll: async () => {
    return await prisma.post.findMany({
      include: { user: true },
    });
  },

  // Update a post
  update: async (id, data) => {
    return await prisma.post.update({
      where: { id: parseInt(id) },
      data,
    });
  },

  // Delete a post
  delete: async (id) => {
    return await prisma.post.delete({
      where: { id: parseInt(id) },
    });
  },
};

module.exports = PostModel;
