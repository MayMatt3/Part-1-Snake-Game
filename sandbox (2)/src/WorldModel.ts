import display from "./display";
import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  constructor(snake: Snake) {
    this.snake = snake;
  }

  update(steps: number) {
    this.snake.move(steps);
  }
  public get Snake() {
    return this.snake;
  }
}

export default WorldModel;
