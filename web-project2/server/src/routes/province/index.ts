import express, { Request, Response } from "express";
import { ProvinceModel } from "./province.model";
import { Province } from "./province.type";

const router = express.Router();

router.get("/getProvinceTitle/:title", async (req: Request, res: Response) => {
  const resProvince: Province = await ProvinceModel.findOne({
    title: req.params.title,
  });
  if (!resProvince) {
    res.send("not find province");
  }
  res.send(`say hello ${resProvince.title}`);
});

router.get("/getprovince/:id", async (req: Request, res: Response) => {
  const resProvince: Province = await ProvinceModel.findById(req.params.id);
  if (!resProvince) {
    res.send("not find province");
  }
  res.send(resProvince);
});

router.get("/getprovinces", async (req: Request, res: Response) => {
  const resProvinces: Province[] = await ProvinceModel.find();

  res.send(resProvinces);
});

router.post("/addProvince", async (req: Request, res: Response) => {
  const province = req.body;

  await ProvinceModel.create(province);

  res.send(province);
});

router.post("/updateProvince", async (req: Request, res: Response) => {
  const input = req.body;

  const inputValue = {
    ...input,
  };
  delete inputValue._id;
  const resProvince = await ProvinceModel.findByIdAndUpdate(
    input._id,
    inputValue
  );

  res.send(resProvince);
});

router.post("/deleteProvince", async (req: Request, res: Response) => {
  const { id } = req.body;

  await ProvinceModel.findByIdAndDelete(id);

  res.send("success delete Province");
});

export default router;
