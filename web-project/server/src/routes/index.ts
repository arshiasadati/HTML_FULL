import { Express } from "express";
import memberRoutes from "./member";
import provinceRoutes from "./province";
import cityRoutes from "./city";
import newsRoutes from "./news";
import commentRoutes from "./comment";
import fileRoutes from "./fileRoute";

export default function (app: Express) {
  app.use("/members", memberRoutes);
  app.use("/provinces", provinceRoutes);
  app.use("/cities", cityRoutes);
  app.use("/news", newsRoutes);
  app.use("/comments", commentRoutes);
  app.use("/file", fileRoutes);
}
