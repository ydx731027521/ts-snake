export default class ScorePanel {
  score = 0;
  level = 1;
  scoreEl: HTMLElement;
  levelEl: HTMLElement;
  maxLevel: number;
  upStep: number;

  constructor(maxLevel = 10, upStep = 10) {
    this.maxLevel = maxLevel;
    this.upStep = upStep;
    this.scoreEl = document.querySelector('.score') as HTMLElement;
    this.levelEl = document.querySelector('.level') as HTMLElement;
  }

  addScore() {
    this.scoreEl.innerHTML = ++this.score + '';

    if (this.score % this.upStep === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEl.innerHTML = ++this.level + '';
    }
  }
}
