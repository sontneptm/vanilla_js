const player ={
    name: 'Guri',
    hello: function(yourName){
        console.log("hello " + yourName + " my name is "+ this.name);
    },
};

let guri =2;

player.hello("Ado");