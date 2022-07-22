// 引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  //   记录是否结束
  isLive: boolean = false;
  // 移动方向
  direction: string = "Right";
  btnElement:HTMLElement

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(12,2);
    this.btnElement = document.getElementById("toggle-btn")!

    this.init();
  }

  //初始化方法
  init() {
    // 绑定键盘的 事件
    document.addEventListener("keydown", this.onKeyDown.bind(this));
    this.btnElement.addEventListener("click",(e)=>{
      this.isLive = !this.isLive;
      if(this.isLive){
        this.run()
      }else {
        this.snake.removeBody() 
        this.snake.X=0
        this.snake.Y=0
        this.direction = "Right"
      }
    })
    this.run();
  }

  // 键盘按下的响应
  onKeyDown(e: KeyboardEvent) {
    // if (
    //   e.key == "ArrowLeft" ||
    //   e.key == "ArrowRight" ||
    //   e.key == "ArrowUp" ||
    //   e.key == "ArrowDown"
    // ) {
    this.direction = e.key;
    // }
  }

  run() {

    /**
     * 根据方向(this.direction) 改变蛇的位置
     */
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.direction) {
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;
      case "ArrowUp":
      case "Up":
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        y += 10;
        break;
      default:
        break;
    }

    this.checkEat(x, y); 
    try {
      // 修改蛇的位置
      this.snake.X = x;
      this.snake.Y = y;

    } catch (e) {
      this.isLive = false;
      console.error(e);
      this.isLive = false;
      alert(e);
    }

    // 开启定时
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X == this.food.X && Y == this.food.Y) {
      console.log("吃到食物了");
      this.food.change();
      this.snake.addBody();

      this.scorePanel.addScore();
    }
  }
}

export default GameControl;
