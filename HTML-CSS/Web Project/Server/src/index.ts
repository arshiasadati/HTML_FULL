import express, {Express} from "express";
import routes from "./Routes"
import cors from "cors"

const app: Express = express();
app.use(express.json())
app.use(
  cors({
    origin:true,
    credentials:true,
  })
)
const port =  3000;

routes(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});