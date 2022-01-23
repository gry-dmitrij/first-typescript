"use strict";
exports.__esModule = true;
exports.renderUserBlock = void 0;
var lib_js_1 = require("./lib.js");
var UserData = /** @class */ (function () {
    function UserData() {
        this.username = '';
        this.avatarUrl = '';
    }
    return UserData;
}());
function getUserData() {
    var user = localStorage.getItem('user');
    if (user instanceof UserData) {
        return user;
    }
    return {
        username: '',
        avatarUrl: ''
    };
}
function getFavoritesAmount() {
    var favoritesAmount = localStorage.getItem('favoritesAmount');
    if (typeof favoritesAmount === 'number')
        return favoritesAmount;
    return 0;
}
function renderUserBlock(username, avatarLink, favoriteItemsAmount) {
    var favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    var hasFavoriteItems = !!favoriteItemsAmount;
    (0, lib_js_1.renderBlock)('user-block', "\n    <div class=\"header-container\">\n      <img class=\"avatar\" src=\"".concat(avatarLink, "\" alt=\"").concat(username, "\" />\n      <div class=\"info\">\n          <p class=\"name\">").concat(username, "</p>\n          <p class=\"fav\">\n            <i class=\"heart-icon").concat(hasFavoriteItems ? ' active' : '', "\"></i>").concat(favoritesCaption, "\n          </p>\n      </div>\n    </div>\n    "));
}
exports.renderUserBlock = renderUserBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQXNDO0FBRXRDO0lBQUE7UUFDRSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLElBQU0sSUFBSSxHQUFZLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsSUFBSSxJQUFJLFlBQVksUUFBUSxFQUFFO1FBQzVCLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFDRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUE7QUFDSCxDQUFDO0FBRUQsU0FBUyxrQkFBa0I7SUFDekIsSUFBTSxlQUFlLEdBQVksWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pFLElBQUksT0FBTyxlQUFlLEtBQUssUUFBUTtRQUNyQyxPQUFPLGVBQWUsQ0FBQTtJQUN4QixPQUFPLENBQUMsQ0FBQTtBQUNWLENBQUM7QUFFRCxTQUFnQixlQUFlLENBQUUsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLG1CQUE0QjtJQUNqRyxJQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFBO0lBQ2pGLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFBO0lBRTlDLElBQUEsb0JBQVcsRUFDVCxZQUFZLEVBQ1osb0ZBRTZCLFVBQVUsc0JBQVUsUUFBUSw0RUFFakMsUUFBUSxpRkFFRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFTLGdCQUFnQixxREFJdkYsQ0FDRixDQUFBO0FBQ0gsQ0FBQztBQWxCRCwwQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5jbGFzcyBVc2VyRGF0YSB7XG4gIHVzZXJuYW1lID0gJyc7XG4gIGF2YXRhclVybCA9ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyRGF0YSgpOiBVc2VyRGF0YSB7XG4gIGNvbnN0IHVzZXI6IHVua25vd24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICBpZiAodXNlciBpbnN0YW5jZW9mIFVzZXJEYXRhKSB7XG4gICAgcmV0dXJuIHVzZXJcbiAgfVxuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBhdmF0YXJVcmw6ICcnXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVzQW1vdW50KCk6bnVtYmVyIHtcbiAgY29uc3QgZmF2b3JpdGVzQW1vdW50OiB1bmtub3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlc0Ftb3VudCcpO1xuICBpZiAodHlwZW9mIGZhdm9yaXRlc0Ftb3VudCA9PT0gJ251bWJlcicpXG4gICAgcmV0dXJuIGZhdm9yaXRlc0Ftb3VudFxuICByZXR1cm4gMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrICh1c2VybmFtZTogc3RyaW5nLCBhdmF0YXJMaW5rOiBzdHJpbmcsIGZhdm9yaXRlSXRlbXNBbW91bnQ/OiBudW1iZXIpIHtcbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyBmYXZvcml0ZUl0ZW1zQW1vdW50IDogJ9C90LjRh9C10LPQviDQvdC10YInXG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSAhIWZhdm9yaXRlSXRlbXNBbW91bnRcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHthdmF0YXJMaW5rfVwiIGFsdD1cIiR7dXNlcm5hbWV9XCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VybmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=