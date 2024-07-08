import express, { Request, Response } from "express";
import { MemberModel } from "./member.model";
import { Member } from "./member.type";
import { CityModel } from "../city/citymodel";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("member + Express + TypeScripts  Server");
});

router.get("/getMember/:nationalcode", async (req: Request, res: Response) => {
  const resMember: Member = await MemberModel.findOne({
    nationalcode: req.params.nationalcode,
  });
  if (!resMember) {
    res.send("not find member");
  }
  res.send(resMember);
});

router.post("/addMember", async (req: Request, res: Response) => {
  const { firstname, lastname, nationalcode, mobile, email, age, address } =
    req.body;

  const resCity = await CityModel.findById(address.cityId);
  const addressValue = {
    title: address.title,
    description: address.description,
    city: {
      _id: resCity._id,
      title: resCity.title,
    },
  };

  const memberValue = {
    firstname,
    lastname,
    nationalcode,
    mobile,
    email,
    age,
    address: [addressValue],
  };

  const resMember = await MemberModel.create(memberValue);

  res.send("success add Member");
});

router.post("/updateMember", async (req: Request, res: Response) => {
  const input = req.body;

  const inputAddress = [];
  for (const a of input.address) {
    const resCity = await CityModel.findById(a.cityId);
    const valueAddress = {
      title: a.title,
      description: a.description,
      city: {
        _id: resCity._id,
        title: resCity.title,
      },
    };

    inputAddress.push(valueAddress);
  }

  delete input.address;

  const inputValue = {
    ...input,
    address: inputAddress,
  };

  const resMember = await MemberModel.findByIdAndUpdate(input.id, inputValue);

  res.send(resMember);
});

router.delete(
  "/deleteMember/:nationalcode",
  async (req: Request, res: Response) => {
    const nationalcode = req.params.nationalcode;

    await MemberModel.findOneAndDelete({ nationalcode });

    res.send("success deleted Member");
  }
);

router.delete(
  "/deleteMemberWithMobile/:mobile",
  async (req: Request, res: Response) => {
    const phone = req.params.phone;

    await MemberModel.findOneAndDelete({ mobile: phone });

    res.send("success deleted Member");
  }
);

export default router;
