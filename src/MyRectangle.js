"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MyRectangle = void 0;
var MyAreaPrimitive2D_1 = require("./MyAreaPrimitive2D");
var MyRectangle = /** @class */ (function (_super) {
    __extends(MyRectangle, _super);
    function MyRectangle(x0, y0, width, height) {
        var _this = _super.call(this, x0, y0) || this;
        _this._rect = {
            point: _this.point,
            width: width,
            height: height
        };
        return _this;
    }
    Object.defineProperty(MyRectangle.prototype, "area", {
        get: function () {
            return this._rect.width * this._rect.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyRectangle.prototype, "width", {
        get: function () {
            return this._rect.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyRectangle.prototype, "height", {
        get: function () {
            return this._rect.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyRectangle.prototype, "leftTop", {
        get: function () {
            return this.point;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyRectangle.prototype, "rightBottom", {
        get: function () {
            return {
                x0: this.point.x0 + this._rect.width,
                y0: this.point.y0 + this._rect.height
            };
        },
        enumerable: false,
        configurable: true
    });
    return MyRectangle;
}(MyAreaPrimitive2D_1.MyAreaPrimitive2D));
exports.MyRectangle = MyRectangle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlSZWN0YW5nbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeVJlY3RhbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBc0Q7QUFTdEQ7SUFBaUMsK0JBQWlCO0lBR2hELHFCQUFZLEVBQVUsRUFBRSxFQUFVLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFBakUsWUFDRSxrQkFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBTWQ7UUFMQyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssT0FBQTtZQUNMLE1BQU0sUUFBQTtTQUNQLENBQUE7O0lBQ0gsQ0FBQztJQUVELHNCQUFJLDZCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0UsT0FBTztnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUNwQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ3RDLENBQUE7UUFDSCxDQUFDOzs7T0FBQTtJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFpQyxxQ0FBaUIsR0FrQ2pEO0FBbENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNeUFyZWFQcmltaXRpdmUyRH0gZnJvbSAnLi9NeUFyZWFQcmltaXRpdmUyRCc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuL015R3JhcGhpY3NQcmltaXRpdmUyRCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdCB7XG4gIHBvaW50OiBQb2ludCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIE15UmVjdGFuZ2xlIGV4dGVuZHMgTXlBcmVhUHJpbWl0aXZlMkQge1xuICBwcml2YXRlIF9yZWN0OiBSZWN0O1xuXG4gIGNvbnN0cnVjdG9yKHgwOiBudW1iZXIsIHkwOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgc3VwZXIoeDAsIHkwKTtcbiAgICB0aGlzLl9yZWN0ID0ge1xuICAgICAgcG9pbnQ6IHRoaXMucG9pbnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodFxuICAgIH1cbiAgfVxuXG4gIGdldCBhcmVhKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3Qud2lkdGggKiB0aGlzLl9yZWN0LmhlaWdodFxuICB9XG5cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY3Qud2lkdGhcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjdC5oZWlnaHRcbiAgfVxuXG4gIGdldCBsZWZ0VG9wKCk6IFJlYWRvbmx5PFBvaW50PiB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRcbiAgfVxuXG4gIGdldCByaWdodEJvdHRvbSgpOiBSZWFkb25seTxQb2ludD4ge1xuICAgIHJldHVybiB7XG4gICAgICB4MDogdGhpcy5wb2ludC54MCArIHRoaXMuX3JlY3Qud2lkdGgsXG4gICAgICB5MDogdGhpcy5wb2ludC55MCArIHRoaXMuX3JlY3QuaGVpZ2h0XG4gICAgfVxuICB9XG59XG4iXX0=