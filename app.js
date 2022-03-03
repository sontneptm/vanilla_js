const player ={
    name: 'Guri',
    hello: function(yourName){
        console.log("hello " + yourName + " my name is "+ this.name);
    },
};

let guri =1;

player.hello("Ado");