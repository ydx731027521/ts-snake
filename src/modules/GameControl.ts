import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl {
  snake: Snake;
  scorePanel: ScorePanel;
  food: Food;
  direction: string = 'Right';
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
    this.food = new Food();

    this.init();
  }

  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key;
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      default:
        break;
    }

    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      this.isLive = false;
      console.log('撞墙了，游戏结束');
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - this.scorePanel.level * 20);
  }

  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;
