import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/landing", (req, res) => res.render("landing"));
// catch all
app.get("/*", (req, res) => res.redirect("/"));

console.log("app start");

const handleListen = () => console.log(`Listen on http://localhost:3000 & ws://localhost:3000`);

// create http server
const server = http.createServer(app);
// create ws server in http server
const wss = new WebSocket.Server({ server });

server.listen(3000, handleListen);
