import express from 'express'
import calculateBMI from './calculateBMI'

const app = express()

app.get("/", (_req, res) => {
    res.send("something")
})

app.get("/bmi/:height/:weight", (_req, res) => {

    let {height, weight} = _req.params
    res.json({
        bmi: calculateBMI(Number(height), Number(weight)),
        height: height,
        weight: weight
    })
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Here is the PORT and server is active ${PORT}`)
})