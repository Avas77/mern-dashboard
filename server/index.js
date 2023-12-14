import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello user" });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_CONNECT);
  } catch (error) {
    console.log(error);
  }
};
