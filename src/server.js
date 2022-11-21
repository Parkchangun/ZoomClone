import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/landing", (req, res) => res.render("landing"));
// catch all
app.get("/*", (req, res) => res.redirect("/"))

console.log("app start");

app.listen(3000);
