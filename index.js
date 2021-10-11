function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(errand = 'go to the office') {
    return `This Monday, I will ${errand}.`;
}

function wrapAdjective(symbol = '*') {
    return function (result = 'special') {
        const emphatic = `You are ${symbol}${result}${symbol}!`
        return emphatic;
    }
}

console.log(saturdayFun());
console.log(mondayWork());
console.log(wrapAdjective()('a hard worker'));
console.log(wrapAdjective('||')('a dedicated programmer'));
