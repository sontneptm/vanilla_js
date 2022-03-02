const player ={
    name: 'Guri',
    hello: function(yourName){
        console.log("hello " + yourName + " my name is "+ this.name);
    },
};

player.hello("Ado");
player.hello("ADU");