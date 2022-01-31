// code your solution here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (job = "go to the office") => {
    return `This Monday, I will ${job}.`
}

function wrapAdjective(flair = "special"){
    return function result (noun){
        return `You are ${flair}${noun}${flair}!`;
    }
}