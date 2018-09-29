module.exports = function getZerosCount(number, base) {
  "use strict";
  let multipliers={}, currentNumber, arr = [], count, j, currentNumberCount;
    
    for(let i=2; i<=base; i++) {
       if(base%i == 0) {
          if(i != j) {
            count = 1;
            multipliers[i] = count;
            j=i;
          }else{
            count++;
            multipliers[i] = count;
          }
          base = base/i;
          i--;
       }
    }
    
    for(let key in multipliers) {
      currentNumber = number;
      currentNumberCount = 0;
      while(currentNumber >= 1) {
        currentNumber = Math.floor(currentNumber/key);
        currentNumberCount+=currentNumber;
       } 
       arr.push(Math.floor(currentNumberCount/multipliers[key]));
    } 

    return Math.min.apply(Math, arr);
}