import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from "./routes/dalle.routes";
import router from "./routes/dalle.routes";
dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(router);
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//consume dalle routes as middleware
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
