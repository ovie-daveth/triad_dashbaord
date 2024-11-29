import jwt from "jsonwebtoken"; // Import jsonwebtoken
import response from "../views/response.js"; // Import response utility

// Load environment variables
// import dotenv from "dotenv";
// dotenv.config();

// Middleware to check for a valid JWT token
const authMiddleware = (req, res, next) => {
  // Get token from Authorization header (e.g., "Bearer token")
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    // If no token is provided, return an error
    return response.error(res, "Authentication failed. No token provided.");
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to the request object (this can be used in subsequent routes)
    req.user = decoded;  // `decoded` contains the payload of the token (user's ID, email, etc.)

    // If token is valid, proceed to the next middleware/route handler
    next();
  } catch (error) {
    console.error(error);
    return response.error(res, "Invalid or expired token.");
  }
};

export default authMiddleware;
