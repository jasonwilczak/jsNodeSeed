
var somefile = require("./source/somefile");

setTimeout(function(){
    console.log("Hi");

    setTimeout(function(){
        console.log(somefile.someFunction());
    },100);
},100);