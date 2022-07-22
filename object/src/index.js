"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log("hello");
    }
}
Person.gender = "female";
Person.kind = "human";
const p1 = new Person("孙悟空", 500);
console.log(p1);
console.log(Person.gender);
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log("animal sayHello");
    }
}
class Dog extends Animal {
    constructor(name, age) {
        if (typeof age == "number") {
            super(name, age);
        }
        else {
            super(name, 2);
        }
    }
    sayHello() {
        console.log("dog say woof woof woof....");
    }
}
class Cat extends Animal {
    sayHello() {
        super.sayHello();
    }
}
let dog = new Dog("小白");
let cat = new Cat("野猫", 1);
dog.sayHello();
cat.sayHello();
class MyClass {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sayHello() {
        throw new Error("Method not implemented.");
    }
}
class Human {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getAge() {
        return this._age;
    }
    setAge(age) {
        if (age >= 0 && age < 150) {
            this._age = age;
        }
    }
}
function fn(a) {
    return a;
}
console.log(fn(12));
console.log(fn("12"));
let res = fn("asas");
function fn2(a) {
    return a;
}
