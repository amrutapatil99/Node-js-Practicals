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


function calculatePrice(){
    let totalPrice =0;
    for(let j = 0;j<orders.length;j++){
        let order =orders[j];
        totalPrice = totalPrice+order.Item.price;
    }
    return totalPrice;
    
}

function calculateTotal(){
    let total = 0;
    for(let i=0;i<orders.length;i++){
        total = total + orders[i].totalAmount;

    }
    return total;
}



module.exports.calculateTotal = calculateTotal;
module.exports.calculatePrice= calculatePrice;

