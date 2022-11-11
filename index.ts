import express from 'express'
import calculateBMI from './calculateBMI'
import exercise from './calculator'

const app = express()
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (_req, res) => {
    res.send("something")
})

app.get("/bmi/:height/:weight", (_req, res) => {
    const {height, weight} = _req.params
    try{
        res.json({
            bmi: calculateBMI(Number(height), Number(weight)),
            height: height,
            weight: weight
        })
    }
    catch{
        res.json({
            error: "malformatted parameters"
        })
    }
})

app.post("/exercise", (req, res) => {
    console.log(req.body)
    const {daily_exercises, target} = req.body
    try{
        res.json(exercise(daily_exercises, target))
    }
    catch{
        res.json({
            error: "there was an error on the page"
        })
    }

})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Here is the PORT and server is active ${PORT}`)
})