// // GLOBAL OBJE NEDİR?
// // MODÜL KAVRAMI  -- IIFE (Immediate Function)

// //Tarayıcı

// // Node

// var controllerA = (function () {
//     //scope A
//     // Private
//     var firstName = "Halil"
//     var log = function(){
//         console.log(this.firstName)
//     }

//     // Public Members
//     return{
//         firstName,
//         log
//     }
// })();


// // Global kavramı
// // console.log(global)

// ------------------------------------------------ //

var firstName = "Halil" //public member
var age = 29 //private member
var log = function(name){
    console.log(name)
}

// module.exports.name = firstName;
// module.exports.log = log;
module.exports = {
    name: firstName,
    log: log
}