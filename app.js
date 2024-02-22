function join(arg){
    return arg.join();
}

function reverse(arg){
    return arg.reverse();
}

function split(arg){
    return arg.split('');
}

const compose = (...args) => {
    return function(str){
        args.forEach((arg) => {
            str = arg(str);
        })
        return str;
    }
} 

const composeFunctions = compose(split,reverse,join)

console.log(composeFunctions("noam"));
