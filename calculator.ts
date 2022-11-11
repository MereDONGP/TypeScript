interface calculatedResult {
    days: number,
    trainingDays: number,
    originalTarget: number,
    calculatedAverage: number,
    targetReached: boolean,
    Rating: number,
    explanation: string,
    target: number
}


const exercise = (week : string[], target:number) : calculatedResult => {
    let total = 0
    let days = 0 
    let success = false
    let description = " "
    let rating = 0 
    for(let i = 0; i < week.length;i++){
        if (Number(week[i]) > 0) {
            days = days + 1
            total = total + Number(week[i]) 
        }else{
            total = total + 0 
        }
    }

    let average = total / Number(week.length) 

    if(average > 2 ){
        success = true 
        description = "you are doing amazing"
        rating = 3 
    }
    else if(average < 2){
        success = false
        description = "not too bad but you could be doing better"
        rating = 2 
    }
    else if(average === 0){
        success = false
        description ="you did nothing"
        rating = 1
    }

    return {
        days: 7,
        trainingDays: days,
        originalTarget: 5, 
        calculatedAverage: average,
        targetReached: success,
        Rating: rating,
        explanation: description,
        target: Number(target)
    }
}

export default exercise
