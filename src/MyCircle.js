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
exports.MyCircle = void 0;
var MyAreaPrimitive2D_1 = require("./MyAreaPrimitive2D");
var MyCircle = /** @class */ (function (_super) {
    __extends(MyCircle, _super);
    function MyCircle(x0, y0, radius) {
        var _this = _super.call(this, x0, y0) || this;
        _this._circle = {
            point: _this.point,
            radius: radius
        };
        return _this;
    }
    Object.defineProperty(MyCircle.prototype, "center", {
        get: function () {
            return this.point;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCircle.prototype, "radius", {
        get: function () {
            return this._circle.radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCircle.prototype, "area", {
        get: function () {
            return Math.PI * Math.pow(this.radius, 2);
        },
        enumerable: false,
        configurable: true
    });
    return MyCircle;
}(MyAreaPrimitive2D_1.MyAreaPrimitive2D));
exports.MyCircle = MyCircle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlDaXJjbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeUNpcmNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBc0Q7QUFRdEQ7SUFBOEIsNEJBQWlCO0lBRzdDLGtCQUFZLEVBQVMsRUFBRSxFQUFVLEVBQUUsTUFBYztRQUFqRCxZQUNFLGtCQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FLZDtRQUpDLEtBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxRQUFBO1NBQ1AsQ0FBQTs7SUFDSCxDQUFDO0lBRUQsc0JBQUksNEJBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMEJBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFHSCxlQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUE4QixxQ0FBaUIsR0F3QjlDO0FBeEJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNeUFyZWFQcmltaXRpdmUyRH0gZnJvbSAnLi9NeUFyZWFQcmltaXRpdmUyRCc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuL015R3JhcGhpY3NQcmltaXRpdmUyRCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlIHtcbiAgcG9pbnQ6IFBvaW50LFxuICByYWRpdXM6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgTXlDaXJjbGUgZXh0ZW5kcyBNeUFyZWFQcmltaXRpdmUyRCB7XG4gIHByaXZhdGUgX2NpcmNsZTogQ2lyY2xlO1xuXG4gIGNvbnN0cnVjdG9yKHgwOm51bWJlciwgeTA6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICBzdXBlcih4MCwgeTApO1xuICAgIHRoaXMuX2NpcmNsZSA9IHtcbiAgICAgIHBvaW50OiB0aGlzLnBvaW50LFxuICAgICAgcmFkaXVzXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNlbnRlcigpOiBSZWFkb25seTxQb2ludD4ge1xuICAgIHJldHVybiB0aGlzLnBvaW50XG4gIH1cblxuICBnZXQgcmFkaXVzKCk6IFJlYWRvbmx5PG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9jaXJjbGUucmFkaXVzO1xuICB9XG5cbiAgZ2V0IGFyZWEoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5QSSAqIE1hdGgucG93KHRoaXMucmFkaXVzLCAyKTtcbiAgfVxuXG5cbn1cbiJdfQ==