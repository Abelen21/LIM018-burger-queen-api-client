const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const secret = "EsUnSecreto";

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
  if (req.body.email === "iam@fakel.lol" && req.body.password === "112233") {
    res.jsonp({
      token: secret,
    });
  } else if (
    req.body.email === "mesero@burger.queen" &&
    req.body.password === "112233"
  ) {
    res.jsonp({
      token: secret,
    });
  } else if (
    req.body.email === "cocinero@burger.queen" &&
    req.body.password === "112233"
  ) {
    res.jsonp({
      token: secret,
    });
  } else if (
    req.body.email === "admin@burger.queen" &&
    req.body.password === "112233"
  ) {
    res.jsonp({
      token: secret,
    });
  } else if (
    req.body.email === "mesero2@burger.queen" &&
    req.body.password === "112233"
  ) {
    res.jsonp({
      token: secret,
    });
  } else {
    res.status(400).send("Bad Request");
  }
});

// server.post("/orders", (req, res) => {
  
//   res.jsonp({
//     order:{...req.body,
//     status:'pendiente',
//     dateEntry : new Date().toLocaleTimeString(),
//   }   
//   });

// });

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
