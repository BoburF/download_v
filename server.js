const express = require("express")
const path = require("path")
const ytdl = require("ytdl-core")
const app = express()

app.use(express.static(path.resolve("./public")))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./index.html"))
})

app.get("/video/:v", async (req, res) => {
    let { formats } = await ytdl.getInfo(`https://www.youtube.com/watch?v=${req.params.v}:rel=0`)
    res.json(formats)
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Server working on port...")
})
