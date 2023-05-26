import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();

const router = express.Router();
//we want to configure the use of dalle API
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

//utilize the above config and merge it with your instance of the openAi API
const openai = new OpenAIApi(config);
//and now we can call its API to generate images for us.!!!!!

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES." });
});

//now of course we need to create a new route that we pass the promt from the client to the server.
router.route("/").post(async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createImage({
      prompt: prompt,
      n: 1, //number of images
      size: "1024x1024",
      // the format that we are going to receive the image
    });
    const image = response.data.data[0];

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).json("i cant find the error");
  }
});

export default router;
