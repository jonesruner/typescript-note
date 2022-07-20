// 字面量 进行里类型声明 类似枚举
let a: 10
a =10
a=20 //error


let b : "10" | "50"
b="10"
b="asas" //error

let c : boolean | string
c = false
c=""

// any 任意值 相当于关闭类型检测
let d : any
d=10
d=""
d=false

// unknown 位置类型
let e:unknown
e=10
e="hello"


//  unknow 不能直接赋值给其他，any 可以直接赋值
let s : string
s=e  // e : unknown  , error
s=d  // d : any  

// unknow 赋值给其他类型 以下几种
if (typeof e == 'string')
{
    s = e
}

s = <string>e  //类似于 泛型
s = e as string   // 类型断言


function fn(i){
    if(typeof i == 'string')
    {
        return i 
    }else {
        return false
    }
}

// 没有值  不能是任何值
function fn2() : never {
    throw new Error('error ')
}
