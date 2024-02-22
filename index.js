"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function split(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    console.log(descriptor);
    descriptor.value = function (...args) {
        const [arg] = args;
        const argSpllited = arg.split('');
        originalMethod.apply(this, [argSpllited]);
    };
}
function reverse(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    console.log(descriptor);
    descriptor.value = function (...args) {
        const [arg] = args;
        const argSpllited = arg.reverse();
        originalMethod.apply(this, [argSpllited]);
    };
}
class Test {
    print(str) {
        console.log(str);
    }
}
__decorate([
    split,
    reverse
], Test.prototype, "print", null);
const test = new Test();
test.print("noam");
let x;
console.log(typeof x);
