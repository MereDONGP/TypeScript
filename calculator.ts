interface calculatedResult {
    days: number,
    trainingDays: number,
    originalTarget: number,
    calculatedAverage: number,
    targetReached: boolean,
    Rating: number,
    explanation: string,
}

let days : number[] = [3, 0, 2, 4.5, 0, 3, 1]

const exercise = () : calculatedResult => {
    let total = 0
    let days = 0 
    let success = false
    let description = " "
    let rating = 0 
    let splitList =  process.argv.slice(2, 12)
    for(let i = 0; i < splitList.length;i++){
        if (Number(splitList[i]) > 0) {
            days = days + 1
            total = total + Number(splitList[i]) 
        }else{
            total = total + 0 
        }
    }

    let average = total / Number(splitList.length) 

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
        explanation: description
    }
}


console.log(exercise())