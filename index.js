import express from "express";
import { readdirSync } from "fs";

// Creating express app
const app = express();

// route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

//34.241.81.233
