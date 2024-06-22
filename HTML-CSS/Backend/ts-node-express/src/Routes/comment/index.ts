import express , {Request , Router, Response} from "express";
import { CommentModel } from "./comment.model";
 
const  router = express.Router()

router.get("/Comment", (req: Request , res: Response) =>
    {res.send("Express + TypeScript Server")
})

router.post("/addComment", async (req: Request , res: Response) => {
    const inputValue = {
        ...req.body,
        status : 1
    }

    const resComment = await CommentModel.create(inputValue)

    res.send(resComment)
    
})

router.get("/getComment/:title", async (req: Request , res: Response) =>{
    const resComment = await CommentModel.findOne({
        Comment: req.params.title,
    });
    if(!resComment) {
        res.send("not find Comment")
    }
    res.send(`hello ${resComment.title}`)
})

router.post("/deleteComment", async (req: Request , res: Response) => {
    const { id } = req.body

    await CommentModel.findOneAndDelete(id)
    
    {res.send("success delete Comment")
}})

router.post("/updateStatusComment", async (req: Request , res: Response) => {
    const { commentId } = req.body


    const comment = await CommentModel.findById(commentId)
    
    let status = 1
    if (comment.status === 1) {
        status = 0
    }

    const resComment = await CommentModel.findByIdAndUpdate(commentId , {status} )
    {res.send("resComment")
}})

export default router