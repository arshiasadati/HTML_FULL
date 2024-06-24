import { Express } from "express";
import memberRoutes from "../Routes/member"
import provinceRoutes from "../Routes/province"
import cityRoutes from "../Routes/city"
import newsRoutes from "../Routes/news"
import commentRoutes from "../Routes/comment"

export default function (app: Express) {
    app.use("/members", memberRoutes);
    app.use("/provinces", provinceRoutes);
    app.use("/cities", cityRoutes);
    app.use("/news", newsRoutes);
    app.use("/comments", commentRoutes);
}