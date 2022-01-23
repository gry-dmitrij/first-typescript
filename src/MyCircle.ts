import {MyAreaPrimitive2D} from './MyAreaPrimitive2D';
import {Point} from './MyGraphicsPrimitive2D';

export interface Circle {
  point: Point,
  radius: number
}

export class MyCircle extends MyAreaPrimitive2D {
  private _circle: Circle;

  constructor(x0:number, y0: number, radius: number) {
    super(x0, y0);
    this._circle = {
      point: this.point,
      radius
    }
  }

  get center(): Readonly<Point> {
    return this.point
  }

  get radius(): Readonly<number> {
    return this._circle.radius;
  }

  get area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }


}
