/**
 * 使用 class 定义一个类
 */

class Person {
  //定义属性
  name: string;
  age: number;
  static gender : string ="female"; //定义一个·静态属性
  static readonly kind = "human" // 定义一个只读属性

//   构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(){
    console.log("hello");
  }
}

const p1 = new Person("孙悟空",500);
console.log(p1);
console.log(Person.gender);



// 继承 
// 禁止一个类被直接创建
// 使用abstract  , 在 抽象类中 也可以定义抽象方法
abstract class Animal{
    name:string;
    age:number;
    
    constructor(name:string, age:number){
        this.name = name;
        this.age= age
    }
    sayHello(){
        console.log("animal sayHello");
    }
} 

class Dog extends Animal{ 

    constructor(name:string,age?:number){
        if(typeof age == "number"){
            super(name,age); // 调用父类构造函数
        }else {
            super(name,2)
        }
    }

    // 复写掉 重写掉 sayHello 方法
    sayHello(): void {
        console.log("dog say woof woof woof....");        
    }
}
class Cat extends Animal{
    sayHello(): void {
        super.sayHello()       
    }
}
let dog = new Dog("小白")
let cat = new Cat("野猫",1)

dog.sayHello()
cat.sayHello()


// 关键字 extends super
// 接口 interface
// 接口中的方法 无实现，即无值
interface MyInterface { 
    name:string;
    age:number;
}

interface MyInterface { 
    gender :string;
    sayHello():void;
}

// 定义类可直接实现接口
class MyClass implements MyInterface {
    name: string;
    age: number;
    gender: string;

    constructor(name:string, age:number,gender :string){   
        this.name=name;
        this.age    = age;  
        this.gender = gender 
    }

    sayHello(): void {
        throw new Error("Method not implemented.");
    }
}


// 属性的封装
// 其中的属性可以被任意修改
// class Human {
//     name:string;
//     age:number;

//     constructor (name:string, age:number) { 
//         this.name=name;
//         this.age    = age
//     }
// }

// 改为
class Human {
    // Ts 可以在属性前添加属性 修饰符
    // public 任意位置修改 默认
    // private 私有属性
    // protect 受保护，只能在当前类 和 子类中访问
    private _name:string;
    private _age:number;

    constructor (name:string, age:number) { 
        this._name=name;
        this._age    = age
    }
    getName(){
        return this._name;
    }
    setName(name:string){
        this._name = name
    }
    getAge(){
        return this._age;
    }
    setAge(age:number){
        // 加入age 判断
        if(age>=0 && age<150){
            this._age = age
        }
    }
    
}


// 泛型
// 在定义函数或类，如遇到类型不明确 可以使用泛型
function fn<T> (a:T) : T{
    return a
}

console.log(fn(12)); // 12 number 
console.log(fn("12")); // 12 string
let res = fn<string>("asas")


// 限制泛型 类型
interface Inter {
    length : number;
}
// 使用 extends 关键字 ， 限制T 必须为 Inter 的子类
function fn2<T extends Inter>(a:T) : T {
    return a;
}