var orders = [
    {
        name :'adira',
        Item : {type :'furniture',qty:1, price:10000},
        totalAmount :10000,
        deliveryAddress : "Satara"

    },

    {
        name :'Vrushali',
        Item : {type :'furniture',qty:1, price:10000},
        totalAmount :10000,
        deliveryAddress : "Satara"

    },

    {
        name :'Maitreyee',
        Item : {type :'furniture',qty:1, price:20000},
        totalAmount :10000,
        deliveryAddress : "Satara"

    },


];


/*function calculateTotal(){
    let total = 0;
    for(let i=0;i<orders.length;i++){
        total = total + orders[i].totalAmount;

    }
    return total;
    
}*/



//module.exports.calculateTotal = calculateTotal;
module.exports ={
     //calculateTotal:calculateTotal
     calculateTotal :function calculateTotal(){
        let total = 0;
        for(let i=0;i<orders.length;i++){
            total = total + orders[i].totalAmount;
    
        }
        return total;
        
    }
}
     


