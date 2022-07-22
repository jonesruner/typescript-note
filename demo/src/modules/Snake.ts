class Snake{
    // 蛇的元素
    head: HTMLElement;
    bodies : HTMLCollection;
    element : HTMLElement
    constructor(){
        this.element = document.getElementById("snake")!
        this.head = document.querySelector('#snake > div')!;
        this.bodies =  this.element .getElementsByTagName("div")!;
    } 

    /**
     * 获取蛇 （头） 坐标
     */
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(x:number){
        if(this.X == x) return;
        // 撞墙
        if(x <0 || x > 290) {
            throw new Error("蛇撞墙了")
        };

        // 修改X 时，为避免出现 “双头蛇” “掉头” 的灵异事件
        // 蛇在向左移动时，不能向右掉头，反之亦然 
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft == x) {    
            if(x>this.X)
            {
                // 如果新 x 大于旧值 ， 说明蛇在往右走，此时发生掉头，应该使蛇继续向左
                x = this.X - 10
            }else {
                x = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = `${x}px`;
        this. checkHeadBody()
    }

    set Y(y:number){
        if(this.Y == y) return;
        if(y <0 || y > 290) {
            throw new Error("蛇撞墙了") 
        };   

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == y) {    
            if(y>this.Y)
            {
                // 如果新 x 大于旧值 ， 说明蛇在往右走，此时发生掉头，应该使蛇继续向左
                y = this.Y - 10
            }else {
                y = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = `${y}px`;
        this. checkHeadBody()
    }

    // 添加蛇的身体
    addBody(){
        // 向element 中添加一个div
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    moveBody(){
        // 将后边身体设置为前边身体的位置 比如：第3节的位置 = 第二节的位置
        for (let i =  this.bodies.length -1 ;i > 0; i--) {
            // 获取到 前边 的一节身体
            const prev = this.bodies[i-1] as HTMLElement;
            
            // 将值设置到当前的一节身体

            const cu = this.bodies[i] as HTMLElement;
            cu.style.left = prev.offsetLeft + "px";
            cu.style.top = prev.offsetTop + "px"; 
        } 
    }


    removeBody(){
        for (let i =  this.bodies.length -1 ;i > 0; i--) { 
            const cu = this.bodies[i] as HTMLElement;
           cu.remove()
        } 
    }

    checkHeadBody(){
        // 获取所有的身体，检查是否和蛇头 坐标发生 重叠 
        for(let i=1; i<this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error("咬到了自己")
            }
        }
    }
}


export default Snake;