import express, { Request, Response } from "express";
import { NewsModel } from "./news.model";
import { News } from "./news.type";

const router = express.Router();

router.get("/getNews/:id", async (req: Request, res: Response) => {
  const resNews: News = await NewsModel.findById(req.params.id);
  if (!resNews) {
    res.send("not find News");
  }
  res.send(resNews);
});

router.post("/addNews", async (req: Request, res: Response) => {
  const news = req.body;

  const resNews = await NewsModel.create(news);

  res.send(resNews);
});

router.post("/updateNews", async (req: Request, res: Response) => {
  const inputValue = req.body;

  const resNews = await NewsModel.findByIdAndUpdate(inputValue.id, inputValue);

  res.send(resNews);
});

router.post("/deleteNews", async (req: Request, res: Response) => {
  const { id } = req.body;

  await NewsModel.findByIdAndDelete(id);

  res.send("success delete News");
});

export default router;
