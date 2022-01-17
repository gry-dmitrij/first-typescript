import {MyGraphicsPrimitive2D} from './MyGraphicsPrimitive2D.js';

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  abstract get area(): number;
}
