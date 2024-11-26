const { PrismaClient } = require("@prisma/client");



const prisma = new PrismaClient();

const UserModel = {

    registerUser: async (data) => {
        return await prisma.user.create({ data });
    },
  // Fetch user by ID
  findById: async (id) => {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  },

  // Update user post count
  updatePostCount: async (id, increment = 1) => {
    return await prisma.user.update({
      where: { id: parseInt(id) },
      data: { postCount: { increment } },
    });
  },
};

module.exports = UserModel;
