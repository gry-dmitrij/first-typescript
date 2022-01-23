"use strict";
exports.__esModule = true;
exports.MyGraphicsPrimitive2D = void 0;
var MyGraphicsPrimitive2D = /** @class */ (function () {
    function MyGraphicsPrimitive2D(x0, y0) {
        this._point = {
            x0: x0,
            y0: y0
        };
    }
    Object.defineProperty(MyGraphicsPrimitive2D.prototype, "point", {
        get: function () {
            return this._point;
        },
        enumerable: false,
        configurable: true
    });
    MyGraphicsPrimitive2D.prototype.moveTo = function (x, y) {
        this._point.x0 = x;
        this._point.y0 = y;
    };
    return MyGraphicsPrimitive2D;
}());
exports.MyGraphicsPrimitive2D = MyGraphicsPrimitive2D;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlHcmFwaGljc1ByaW1pdGl2ZTJELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTXlHcmFwaGljc1ByaW1pdGl2ZTJELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBO0lBR0UsK0JBQ0UsRUFBVSxFQUNWLEVBQVU7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osRUFBRSxJQUFBO1lBQ0YsRUFBRSxJQUFBO1NBQ0gsQ0FBQTtJQUNILENBQUM7SUFFRCxzQkFBSSx3Q0FBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0NBQU0sR0FBTixVQUFPLENBQVMsRUFBRSxDQUFTO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVILDRCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCcUIsc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHgwOiBudW1iZXIsXG4gIHkwOiBudW1iZXIsXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNeUdyYXBoaWNzUHJpbWl0aXZlMkQge1xuICBwcml2YXRlIF9wb2ludDogUG9pbnQ7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHgwOiBudW1iZXIsXG4gICAgeTA6IG51bWJlciwpIHtcbiAgICB0aGlzLl9wb2ludCA9IHtcbiAgICAgIHgwLFxuICAgICAgeTAsXG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvaW50KCk6IFJlYWRvbmx5PFBvaW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50XG4gIH1cblxuICBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLl9wb2ludC54MCA9IHg7XG4gICAgdGhpcy5fcG9pbnQueTAgPSB5O1xuICB9XG5cbn1cbiJdfQ==