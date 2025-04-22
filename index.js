const jsonServer = require("json-server");
const cors = require("cors"); // Add this

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Allow CORS
server.use(cors()); // 👈 this enables all CORS requests

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
