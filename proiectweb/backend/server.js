const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

//middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routers

const alimentRouter = require("./routes/alimentRouter");
app.use("/api/alimente", alimentRouter);

const categorieRouter = require("./routes/categorieRouter");
app.use("/api/categorii", categorieRouter);

const utilizatorRouter = require("./routes/utilizatorRouter");
app.use("/api/utilizatori", utilizatorRouter);

const authRouter = require("./routes/authRouter");
app.use("/api/auth", authRouter);

//test api

app.get("/", (req, res) => {
  res.json({ message: "salut api" });
});

//port

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(`serveru' merge pe ${PORT}`);
});
