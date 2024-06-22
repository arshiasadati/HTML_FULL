import express , {Request , Router, Response} from "express";
import { ProvinceModel } from "../province/province.model";
import { CityModel } from "./city.model";
 
const  router = express.Router()

router.get("/city", (req: Request , res: Response) =>
    {res.send("Express + TypeScript Server")
})

router.post("/addCity", async (req: Request , res: Response) => {
    const { title , provinceId } = req.body;

    const resProvince = await ProvinceModel.findById(provinceId)

    const inputValue = {
        title,
        province: {
            _id: resProvince._id,
            title: resProvince.title,
        }
    }

    await CityModel.create(inputValue)
    
    {res.send("success add City")
}})

router.get("/getCity/:title", async (req: Request , res: Response) =>{
    const resCity = await CityModel.findOne({
        city: req.params.title,
    });
    if(!resCity) {
        res.send("not find city")
    }
    res.send(`hello ${resCity.title}`)
})

router.post("/deleteCity", async (req: Request , res: Response) => {
    const { id } = req.body

    await CityModel.findOneAndDelete(id)
    
    {res.send("success delete City")
}})

router.post("/updateCity", async (req: Request , res: Response) => {
    const inputValue = req.body;

    const resCity = await CityModel.findByIdAndUpdate(
        inputValue.id,
        inputValue
    )


    {res.send("success update City")
}})

export default router