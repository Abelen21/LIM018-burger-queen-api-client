const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const secret = "EsUnSecreto2";

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
  console.log(req.headers);
  if (req.method === "POST" && req.path === "/auth") {
    next();
  } else if (req.headers.authorization === `Bearer ${secret}`) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.post("/auth", (req, res) => {
  console.log(router.db.__wrapped__)
  if (
    req.body.email === "iam@fakel.lol" || "mesero@burger.queen" ||"cocinero@burger.queen"||"admin@burger.queen" &&
    req.body.password === "apasswordtochange" || "112233"
  ) {
    res.jsonp({
      token: secret,
    });
  } else res.status(400).send("Bad Request");
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
