// 声明一个对象
let obj : object
obj = {}
obj = function(){}

// {} 指定对象中包含的属性
// formate:   {name:value,name:value}  
// {name?:number} 代表有无都可以
let human : {name : string , age ?:number}  


// 要求必须有name 其他随意
let anyObj :{name : string , [propName : string] :any}

//  定义一个函数结构 类型声明
let dFun: (a:number, b:number) => number
dFun = (a:number,b:number)=>{
    return a +b
}

// 数组类型限定
let sArr : string[]
let nArr : number[]
// 或者
let nnArr : Array<number>


// 元组 长度固定的数组
let h: [string,string]
h=['hello','asaf']



// enum 枚举
enum Gender {
    Male =0,
    Female =1
}

let i : {name: string , gender : Gender}
i = {
    name : "孙悟空",
    gender : Gender.Male
}


// & 表示同时
let j : {name : string} & {age : number}
j = {name : '孙猴子',age:12}

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5
let k : myType
