import express, { Request, Response } from "express";
import { CityModel } from "./citymodel";
import { City } from "./city.type";
import { ProvinceModel } from "../province/province.model";

const router = express.Router();

router.get("/getCity/:title", async (req: Request, res: Response) => {
  const resCity: City = await CityModel.findOne({
    title: req.params.title,
  });
  if (!resCity) {
    res.send("not find City");
  }
  res.send(`say hello ${resCity.title}`);
});

router.post("/addCity", async (req: Request, res: Response) => {
  const { title, provinceId } = req.body;

  const resProvince = await ProvinceModel.findById(provinceId);

  const inputValue = {
    title,
    province: {
      _id: resProvince._id,
      title: resProvince.title,
    },
  };

  await CityModel.create(inputValue);

  res.send("success add City");
});

router.post("/updateCity", async (req: Request, res: Response) => {
  const { id, title, provinceId } = req.body;
  const resProvince = await ProvinceModel.findById(provinceId);

  const inputValue = {
    title,
    province: {
      _id: provinceId,
      title: resProvince.title,
    },
  };

  const resCity = await CityModel.findByIdAndUpdate(id, inputValue);

  res.send(resCity);
});

router.post("/deleteCity", async (req: Request, res: Response) => {
  const { id } = req.body;

  await CityModel.findByIdAndDelete(id);

  res.send("success delete City");
});

export default router;
