
function Order(id,itemdescr,qty,price){
    console.log("New Order Object created");
    this.id = id;
    this.description = itemdescr;
    this.quantity = qty;
    this.price = price;
    this.toString = function(){
        return this.id+" : "+this.description+" : "+this.quantity+" : "+this.price;
    }
}

//module.exports = new Order(1,"Laptop",1,40000);
module.exports = Order;