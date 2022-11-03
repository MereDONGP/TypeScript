import express from 'express'

const app = express()

app.get("/ping", (_req, res) => {
    res.send("something")
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Here is the PORT and server is active ${PORT}`)
})