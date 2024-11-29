import bcrypt from "bcryptjs";


export const verifyPassword = async (plainPassword, hashedPassword) => {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch; // Returns true if the passwords match
  };