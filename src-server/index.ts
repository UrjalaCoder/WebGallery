import express from 'express';
import path from 'path';

const app = express()

/* Logger */
app.get("*", (req: express.Request, _res: express.Response, next: Function) => {
  console.log(req.path)
  next()
})

/* Script loader */
app.use("/dist", express.static(path.resolve("./dist")))

/* Main index file */
app.get("/", (_req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve("./public", "index.html"))
})

/* Server start */
app.listen(process.env.PORT || 3001, () => {
  console.log("Server started!\n-----------\n")
})
