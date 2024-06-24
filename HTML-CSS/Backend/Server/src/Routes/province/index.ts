import express , {Request , Router, Response} from "express";
import { ProvinceModel } from "./province.model";
 
const  router = express.Router()

router.get("/province", (req: Request , res: Response) =>
    {res.send("Express + TypeScript Server")
})

router.post("/addProvince", async (req: Request , res: Response) => {
    const province = req.body;
    const resProvince = await ProvinceModel.create(province)
    console.log(resProvince)
    {res.send("success add Province")
}})

router.get("/getProvince/:title", async (req: Request , res: Response) =>{
    const resProvince = await ProvinceModel.findOne({
        province: req.params.title,
    });
    if(!resProvince) {
        res.send("not find province")
    }
    res.send(`hello ${resProvince.title}`)
})

router.post("/deleteProvince", async (req: Request , res: Response) => {
    const { id } = req.body

    await ProvinceModel.findOneAndDelete(id)
    
    {res.send("success delete Province")
}})

router.post("/updateProvince", async (req: Request , res: Response) => {
    const inputValue = req.body;

    const resProvince = await ProvinceModel.findByIdAndUpdate(
        inputValue.id,
        inputValue
    )


    {res.send("success update City")
}})

export default router