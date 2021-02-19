export default class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.querySelector('.food') as HTMLElement;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    const randomPosition = () => Math.round(Math.random() * 29) * 10;
    const left = randomPosition();
    const top = randomPosition();

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}
