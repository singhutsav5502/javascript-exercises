const repeatString = function(EnterStri,Amount) {
    if(Amount > 0 ){
        x= EnterStri;
        for(let i = 0 ; i<(Amount-1); i++){
            EnterStri += x;
        }
        return EnterStri;
    }
    else if(Amount ==0){
        return('');
    }
    else{
        return("ERROR");
    }
};

// Do not edit below this line
module.exports = repeatString;
