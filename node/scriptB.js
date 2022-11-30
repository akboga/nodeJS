// var controllerB = (function () {
//     //scope B
//     var firstName = "Akboga"
//     var log = function(){
//         console.log(this.firstName)
//     }
//     return{
//         firstName,
//         log
//     }
// })();

// console.log(controllerA.firstName)

// console.log(controllerB.firstName)

// -------------------------------------------------- //

const scriptA = require('./scriptA')

scriptA.log('Deneme')
console.log(scriptA.name)