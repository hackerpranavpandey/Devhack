import express from "express";
const app = express();
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const templatePath = path.join(__dirname, "../template");
import { Login } from "./mongodb.js";
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  };

  await Login.insertMany(data);
  res.render("home");
});

app.post("/login", async (req, res) => {
  try {
    const data = await Login.findOne({ email: req.body.email });
    if (data.password === req.body.password) {
      res.render("home");
    } else {
      res.send("Wrong Password");
    }
  } catch (error) {
    res.send("Wrong credentials");
  }
});

app.listen(5000);
