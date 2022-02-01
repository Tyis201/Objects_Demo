'use strict'

console.log('hello world')

document.write("<h1> Object Demo </h1>")

const spaceship = {
    engine: "rocket",
    color: "Green",
    room: "cockpit",
    flying: function(){
        return "My Spaceship is powered by " + this. engine + " " + "therefore it can fly!!!"
    }
}

console.log(" my spaceship is ", spaceship.color);

console.log(spaceship.flying());

document.write("<h2>", spaceship.flying(), "</h2>")
document.write("<h2> My spaceship is ", spaceship.color, " and has a ", spaceship.room, " for style and comfort!" )

function Icecream (flavor, dish, size){
    this.flavor = flavor;
    this.dish = dish;
    this.size = size;
}
const jaidynsIcecream = new Icecream ('coffe' , 'cone', 'small');

Icecream.prototype.toppings = this.toppings;
const tyisIcecream = new Icecream ('cookie dough', 'bowl', 'medium');

console.log (jaidynsIcecream);
console.log (tyisIcecream);