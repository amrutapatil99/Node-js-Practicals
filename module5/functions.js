const myordersList = require('./orderList.js');



function calculateTotal(){
    
    let total = 0;
    for(let i=0;i<myordersList.length;i++){
        total = total + myordersList[i].totalAmount;

    }
   
    return total;
    
    
}

function maxAmount(){
    let maximumValue = myordersList[0].totalAmount;
      for(let a = 1; a < myordersList.length; a++)
      {
         if(myordersList[a].totalAmount > maximumValue)
         {
            maximumValue = myordersList[a].totalAmount;
         }
      }
      return maximumValue;

}

function minAmount(){
    let minimumValue = myordersList[0].totalAmount;
      for(let a = 1; a < myordersList.length; a++)
      {
         if(myordersList[a].totalAmount < minimumValue)
         {
            minimumValue = myordersList[a].totalAmount;
         }
      }
      return minimumValue;

}

function avgAmount(){
    
    let totalavg = 0;
    for(let i=0;i<myordersList.length;i++){
        totalavg = totalavg + myordersList[i].totalAmount/myordersList.length;

    }
   
    return totalavg;
    
    
}

module.exports ={
    calculateTotal:calculateTotal,
    maxAmount : maxAmount,
    minAmount :minAmount,
    avgAmount : avgAmount
    
}
    