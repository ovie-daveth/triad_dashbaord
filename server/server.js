import express, { json } from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express();

app.use(json());
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
