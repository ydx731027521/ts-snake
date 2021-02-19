class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementsByClassName('snake')[0] as HTMLElement;
    this.head = document.querySelector('.snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(val) {
    if (this.X === val) {
      return;
    } else if (val < 0 || val > 290) {
      throw new Error('撞墙了');
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      if (val > this.X) {
        val = this.X - 10;
      } else {
        val = this.X + 10;
      }
    }

    this.moveBody();

    this.head.style.left = `${val}px`;

    this.checkHeadBody();
  }

  set Y(val) {
    if (this.Y === val) {
      return;
    } else if (val < 0 || val > 290) {
      throw new Error('撞墙了');
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      if (val > this.Y) {
        val = this.Y - 10;
      } else {
        val = this.Y + 10;
      }
    }

    this.moveBody();

    this.head.style.top = `${val}px`;

    this.checkHeadBody();
  }

  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    let headInBody = false;
    for (let i = 1; i < this.bodies.length; i++) {
      const bodyItemEl = this.bodies[i] as HTMLElement;
      if (this.X === bodyItemEl.offsetLeft && this.Y === bodyItemEl.offsetTop) {
        headInBody = true;
        break;
      }
    }
    if (headInBody) {
      alert('碰到自己了，游戏结束');
    }
  }
}

export default Snake;
