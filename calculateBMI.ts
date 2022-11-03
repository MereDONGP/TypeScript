type result = string

const calculateBMI  = (height: number, weight: number) : result => {
    const total = weight / height
    console.log(total)

    if(total < 18.5){
        return "underweight"
    }

    else if (total <= 24.9){
        return "normal weight"
    }

    else if (total <= 29.9){
        return "overweight"
    }

    else if (total > 30){
        return "Obese"
    }
}

console.log(process.argv[2])

console.log(calculateBMI(Number(process.argv[2]), Number(process.argv[3])))


