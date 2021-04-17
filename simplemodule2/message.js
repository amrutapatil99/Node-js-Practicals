var myMsg = function(name){
    console.log(`Name is :${name}`);
}


const myObj =[
    {
        name : "Amruta",
        salary :40000
    },
    {
        name : "Amruta",
        salary :40000
    }
];


function salaryTotal(){
    let sum = 0;
    for(let i=0;i<myObj.length;i++){
        sum = sum + myObj[i].salary;

    }
    //console.log(sum);
    return sum;
}

module.exports = myMsg;

//module.exports.myObj = myObj;

//module.exports.salaryTotal = salaryTotal;

