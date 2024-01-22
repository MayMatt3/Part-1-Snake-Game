// eslint-disable-next-line
import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private position: Point;
  private direction: string;

  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.position = new Point(0, 0);
    this.direction = "right";
  }
  move(squares: number) {
    if (this.direction === "up")
      this.position = new Point(this.position.x, this.position.y - 1);
    else if (this.direction === "down")
      this.position = new Point(this.position.x, this.position.y + 1);
    else if (this.direction === "left")
      this.position = new Point(this.position.x - 1, this.position.y);
    else if (this.direction === "right")
      this.position = new Point(this.position.x + 1, this.position.y);
  }

  turnLeft() {
    if (this.direction === "up") this.direction = "left";
    else if (this.direction === "left") this.direction = "down";
    else if (this.direction === "down") this.direction = "right";
    else if (this.direction === "right") this.direction = "up";
  }

  turnRight() {
    if (this.direction === "up") this.direction = "right";
    else if (this.direction === "right") this.direction = "down";
    else if (this.direction === "down") this.direction = "left";
    else if (this.direction === "left") this.direction = "up";
  }

  /**
   * @deprecated
   */
  turn() {
    if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 1;
    }
  }

  public get positions() {
    return this.currentPosition;
  }
}

class Point {
  private xcoord: number;
  private ycoord: number;
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }

  public get x() {
    return this.xcoord;
  }

  public get y() {
    return this.ycoord;
  }
}

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

export default Snake;
