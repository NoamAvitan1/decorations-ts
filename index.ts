
function split(target:any, propertyKey:string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    console.log(descriptor)
    descriptor.value = function(...args:any[]){
        const [arg] = args;
        const argSpllited = arg.split('');
        originalMethod.apply(this, [argSpllited]); 
    }
} 

function reverse(target:any, propertyKey:string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    console.log(descriptor)
    descriptor.value = function(...args:any[]){
        const [arg] = args; 
        const argSpllited = arg.reverse();
        originalMethod.apply(this, [argSpllited]); 
    }
}

class Test{
    @split
    @reverse
    print(str:string){
        console.log(str);
    }
}

const test = new Test();
test.print("noam")

