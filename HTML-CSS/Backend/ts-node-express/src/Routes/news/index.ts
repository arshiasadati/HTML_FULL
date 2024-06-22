import express , {Request , Router, Response} from "express";
import { NewsModel } from "./news.model";
 
const  router = express.Router()

router.get("/News", (req: Request , res: Response) =>
    {res.send("Express + TypeScript Server")
})

router.post("/addNews", async (req: Request , res: Response) => {
    const News = req.body;
    const resNews = await NewsModel.create(News)
    res.send(resNews)
})

router.get("/getNews/:id", async (req: Request , res: Response) =>{
    const resNews = await NewsModel.findOne(req.body);
    if(!resNews) {
        res.send("not find News")
    }
    res.send(resNews)
})

router.post("/deleteNews", async (req: Request , res: Response) => {
    const { id } = req.body

    await NewsModel.findOneAndDelete(id)
    
    {res.send("success delete News")
}})

router.post("/updateNews", async (req: Request , res: Response) => {
    const inputValue = req.body;

    const resNews = await NewsModel.findByIdAndUpdate(
        inputValue.id,
        inputValue
    )


    {res.send("success update City")
}})

export default router