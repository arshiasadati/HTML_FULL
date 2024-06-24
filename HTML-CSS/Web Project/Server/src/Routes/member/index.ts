import express , {Request , Router, Response} from "express";
import { MemberModel } from "./member.model";
import { CityModel } from "../city/city.model";
 
const  router = express.Router()

router.get("/members", (req: Request , res: Response) =>
    {res.send("Express + TypeScript Server")
})

router.post("/addMember", async (req: Request , res: Response) => {
    const {firstname,lastname,nationalcode,mobile,email,age,address,} = req.body;

    const resCity = await CityModel.findById(address.cityId)
    const addressValue = {
        title : address.title,
        description : address.description,
        city : {
            _id : resCity._id,
            title : resCity.title,
        }
    }
    const memberValue = {
        firstname,
        lastname,
        nationalcode,
        mobile,
        email,
        age,
        address: [addressValue],
    }

    const resMember = await MemberModel.create(memberValue)
    console.log(resMember)
    {res.send("success add Member")
}})

router.get("/getMember/:nationalcode", async (req: Request , res: Response) =>{
    const resMember = await MemberModel.findOne({
        nationalcode: req.params.nationalcode,
    });
    if(!resMember) {
        res.send("not find member")
    }
    res.send(resMember)
})

router.delete("/deleteMember/:nationalcode", async (req: Request , res: Response) => {
    const nationalcode = req.params.nationalcode

    await MemberModel.findOneAndDelete({ nationalcode : nationalcode });

    res.send("success delete member")
})

router.delete("/deleteMemberWithMobile/:mobile", async (req: Request , res: Response) => {
    const phone = req.params.phone

    await MemberModel.findOneAndDelete({ mobile : phone });

    res.send("success delete member")
})

router.post("/updateMember", async (req: Request , res: Response) => {
    const inputValue = req.body;
    const resMember = await MemberModel.findOneAndUpdate({
        nationalcode : inputValue.nationalcode},inputValue
    )
    {res.send("success update Member")
}})




export default router