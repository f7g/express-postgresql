import "dotenv/config";
import cors from "cors";
import express from "express";

import models, { sequelize } from "./models";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});

//Re-initialize database on every server start
const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
