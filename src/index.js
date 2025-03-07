import express from "express";
import { router } from "./routes.js";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
