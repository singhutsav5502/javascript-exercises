const sumAll = function(min,max) {
    let sum = 0;
    if(min<0 || max<0){
        return("ERROR");
    }
    else if(min>max){
        let y = min;
        min = max;
        max = y;
    }
    else if(typeof(min)!== "number" || typeof(max)!== "number"){
        return("ERROR");
    }
    else{
    }
    for (let i = min ; i<=max ; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
