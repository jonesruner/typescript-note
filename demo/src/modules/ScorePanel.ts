class ScorePanel {
    score = 0;
    level = 1

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel : number
    upScore : number


    constructor(maxLevel:number = 10 , upScore:number = 10){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.scoreEle.innerText = this.score + " "
        this.levelEle.innerText = this.level + " " 
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    addScore(){
        // 分数自增
        this.scoreEle.innerText = ++this.score + " "
        if(this.score % this.upScore === 0){
            this.addLevel()
        }
    }
    addLevel(){
        // 分数自增
        if(this.level >= this.maxLevel) return
        this.levelEle.innerText = ++this.level + " "
    }
}

// const panel = new ScorePanel(); 
// for (let i = 0; i <100; i++)
// {
//     panel.addScore()
// }

export default ScorePanel;