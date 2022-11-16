const removeFromArray = function() {
    SearchItems = Array.from(arguments);
    MainArray = SearchItems.shift();
    EditArray = MainArray;
    len=MainArray.length
    for (Item of SearchItems){
        for( let i = 0; i<len;i++){
            if(MainArray[i]=== Item){
                EditArray.splice(i,1);
                len = len -1;
            }
        }
    }
    return EditArray;
};

// Do not edit below this line
module.exports = removeFromArray;
