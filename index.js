function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function greet(){
        console.log('Hello there');
    }
    return greet;
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('Hope you had a good day');
    }
}