const PORT_TO_LISTEN = process.env.PORT || 5000


const path = require("path")
const js = require("json-server")
const server = js.create()
const router = js.router(path.join(__dirname, "db.json"))
const middlewares = js.defaults({static: "./build"})


server.use(middlewares)

server.get("/health", (req, res) => {
  res.send("ok")
})

server.get("/version", (req, res) => {
  res.send("0.0.1")
})

server.use(router)


server.listen(PORT_TO_LISTEN, () => {
  const msg = `JSON Server is listening port ${PORT_TO_LISTEN}.`
  console.log(msg)
})
