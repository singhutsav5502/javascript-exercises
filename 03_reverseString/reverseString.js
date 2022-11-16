const reverseString = function(Stri) {
    const a = Stri.split("");
    let y="";
    for (let i = a.length -1 ;i>-1;i--){
        y += a[i];
    }
    return y;
};

// Do not edit below this line
module.exports = reverseString;
