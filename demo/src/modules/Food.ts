// 食物
class Food {
    element : HTMLElement;
    constructor() {
        // 获取页面中food 元素将其赋值给 element 
        this.element = document.getElementById("food")!;
    }

    // 定义一个获取 食物 X 轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }


    // 修改食物位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小为 0 最大是 290
        let x = Math.round(Math.random() * 29) * 10
        let y = Math.round(Math.random() * 29) * 10
        this.element.style.left=`${x}px`;
        this.element.style.top=`${y}px`; 
    }
}

// const food = new Food();
// console.log(food);
// food.change()


export default Food;