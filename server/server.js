import express, { json } from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import dotenv from "dotenv"
import ImageKit from "imagekit";

const app = express();

app.use(json());
app.use(cors());
dotenv.config();

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMGKIT_URL,
    publicKey: process.env.IMGKITIO_KEY,
    privateKey: process.env.IMGKITPRIVATEKEY,
  });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/auth', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    console.log(result)
    res.send(result);
  });

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
