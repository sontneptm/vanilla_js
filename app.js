const calculator ={
    add: function(a, b){
        console.log(String(a)+ " + " +String(b) + " = " +String(a+b))
    },
    abs: function(a, b){
        console.log(String(a)+ " - " +String(b) + " = " +String(a-b))
    },
    mul: function(a, b){
        console.log(String(a)+ " x " +String(b) + " = " +String(a*b))
    },
    div: function(a, b){
        console.log(String(a)+ " / " +String(b) + " = " +String(a/b))
    },
    power: function(a, b){
        console.log(String(a)+ " power of " +String(b) + " = " +String(a**b))
    },
}

calculator.add(5,1);
calculator.abs(3,6);
calculator.mul(55,13);
calculator.div(5,3);
calculator.power(5,2);