import express, {Express} from "express";
import routes from "./Routes"

const app: Express = express();
app.use(express.json())
const port =  3000;

routes(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});