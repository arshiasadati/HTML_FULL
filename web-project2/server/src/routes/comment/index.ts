import express, { Request, Response } from "express";
import { CommentModel } from "./commentmodel";
import { Comment } from "./comment.type";
import { NewsModel } from "../news/news.model";

const router = express.Router();

router.get("/getComments/:newsId", async (req: Request, res: Response) => {
  const resComments: Comment[] = await CommentModel.find({
    newsId: req.params.newsId,
  });
  if (!resComments) {
    res.send("not find Comment");
  }
  res.send(resComments);
});

router.post("/addComment", async (req: Request, res: Response) => {
  const inputValue = {
    ...req.body,
    status: 1,
  };

  const resComment = await CommentModel.create(inputValue);

  res.send(resComment);
});

router.post("/changeStatusComment", async (req: Request, res: Response) => {
  const { commentId } = req.body;

  const comment = await CommentModel.findById(commentId);
  let status = 1;
  if (comment.status === 1) {
    status = 0;
  }

  const resComment = await CommentModel.findByIdAndUpdate(commentId, {
    status,
  });

  res.send(resComment);
});

router.post("/deleteComment", async (req: Request, res: Response) => {
  const { id } = req.body;

  await CommentModel.findByIdAndDelete(id);

  res.send("success delete Comment");
});

export default router;
