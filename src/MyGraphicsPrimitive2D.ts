export interface Point {
  x0: number,
  y0: number,
}

export abstract class MyGraphicsPrimitive2D {
  private _point: Point;

  protected constructor(
    x0: number,
    y0: number,) {
    this._point = {
      x0,
      y0,
    }
  }

  get point(): Readonly<Point> {
    return this._point
  }

  moveTo(x: number, y: number) {
    this._point.x0 = x;
    this._point.y0 = y;
  }

}
