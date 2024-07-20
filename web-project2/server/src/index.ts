import express, { Express } from "express";
import routes from "./routes";
import cors from "cors";
import fileUpload from "express-fileupload";

const app: Express = express();
app.use(express.json());

app.use(fileUpload());

app.use(express.static("static"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
const port = 3000;

routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
