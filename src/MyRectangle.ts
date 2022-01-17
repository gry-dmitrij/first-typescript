import {MyAreaPrimitive2D} from './MyAreaPrimitive2D';
import {Point} from './MyGraphicsPrimitive2D';

export interface Rect {
  point: Point,
  width: number,
  height: number
}

export class MyRectangle extends MyAreaPrimitive2D {
  private _rect: Rect;

  constructor(x0: number, y0: number, width: number, height: number) {
    super(x0, y0);
    this._rect = {
      point: this.point,
      width,
      height
    }
  }

  get area(): number {
    return this._rect.width * this._rect.height
  }

  get width(): number {
    return this._rect.width
  }

  get height(): number {
    return this._rect.height
  }

  get leftTop(): Readonly<Point> {
    return this.point
  }

  get rightBottom(): Readonly<Point> {
    return {
      x0: this.point.x0 + this._rect.width,
      y0: this.point.y0 + this._rect.height
    }
  }
}
