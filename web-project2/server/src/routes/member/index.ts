import express, { Request, Response } from "express";
import { MemberModel } from "./member.model";
import { Member } from "./member.type";
import { CityModel } from "../city/citymodel";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("member + Express + TypeScripts  Server");
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const resMember: Member = await MemberModel.findOne({
    email,
    password,
  });

  res.send(resMember);
});

router.get("/getmembers", async (req: Request, res: Response) => {
  const resMembers: Member[] = await MemberModel.find({});
  if (!resMembers) {
    res.send("not find member");
  }
  res.send(resMembers);
});

router.get("/getmember/:id", async (req: Request, res: Response) => {
  const resMember: Member = await MemberModel.findById(req.params.id);
  if (!resMember) {
    res.send("not find member");
  }
  res.send(resMember);
});

router.post("/register", async (req: Request, res: Response) => {
  const { firstname, lastname, mobile, email, password, age, avatar } =
    req.body;

  const memberValue = {
    firstname,
    lastname,
    mobile,
    email,
    password,
    age,
    avatar,
  };

  const resMember = await MemberModel.create(memberValue);

  res.send(resMember);
});

router.post("/addMember", async (req: Request, res: Response) => {
  const { firstname, lastname, mobile, email, password, age, avatar } =
    req.body;

  // const resCity = await CityModel.findById(address.cityId);
  // const addressValue = {
  //   title: address.title,
  //   description: address.description,
  //   city: {
  //     _id: resCity._id,
  //     title: resCity.title,
  //   },
  // };

  const memberValue = {
    firstname,
    lastname,
    mobile,
    email,
    password,
    age,
    avatar,
  };

  const resMember = await MemberModel.create(memberValue);

  res.send(resMember);
});

router.post("/updateMember", async (req: Request, res: Response) => {
  const input = req.body;

  // const inputAddress = [];
  // for (const a of input.address) {
  //   const resCity = await CityModel.findById(a.cityId);
  //   const valueAddress = {
  //     title: a.title,
  //     description: a.description,
  //     city: {
  //       _id: resCity._id,
  //       title: resCity.title,
  //     },
  //   };

  //   inputAddress.push(valueAddress);
  // }

  //delete input.address;

  const inputValue = {
    ...input,
  };
  delete inputValue._id;

  const resMember = await MemberModel.findByIdAndUpdate(input._id, inputValue);

  res.send(resMember);
});

router.get("/deleteMember/:id", async (req: Request, res: Response) => {
  await MemberModel.findByIdAndDelete(req.params.id);

  res.send("success deleted Member");
});

router.delete(
  "/deleteMemberWithMobile/:mobile",
  async (req: Request, res: Response) => {
    const phone = req.params.phone;

    await MemberModel.findOneAndDelete({ mobile: phone });

    res.send("success deleted Member");
  }
);

export default router;
