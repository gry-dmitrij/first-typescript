"use strict";
exports.__esModule = true;
exports.renderSearchFormBlock = exports.listeners = void 0;
var lib_js_1 = require("./lib.js");
var luxon_js_1 = require("/lib/luxon/es6/luxon.js");
function listeners() {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            find();
        });
    }
}
exports.listeners = listeners;
// функция-обработчик формы
function find() {
    var _a, _b, _c, _d;
    var city = (_a = document.getElementById('city')) === null || _a === void 0 ? void 0 : _a.value;
    var checkin = (_b = document.getElementById('check-in-date')) === null || _b === void 0 ? void 0 : _b.value;
    var checkout = (_c = document.getElementById('check-out-date')) === null || _c === void 0 ? void 0 : _c.value;
    var maxPrice = +((_d = document.getElementById('max-price')) === null || _d === void 0 ? void 0 : _d.value);
    var data = {
        city: city,
        checkin: checkin,
        checkout: checkout,
        maxPrice: maxPrice
    };
    search(data);
}
function search(data, cb) {
    console.log(data);
    var cb1;
    if (cb == null) {
        cb1 = function (value) { return value; };
    }
    else {
        cb1 = cb;
    }
    setTimeout(function () {
        var rand = Math.random();
        if (rand < 0.5) {
            cb1(new Error('Ошибка'));
        }
        else {
            cb1([]);
        }
    }, 1000);
}
function renderSearchFormBlock(arrivalDate, departureDate) {
    var arrivalDateTime = !arrivalDate ? luxon_js_1.DateTime.now().plus({ day: 1 }) : luxon_js_1.DateTime.fromJSDate(arrivalDate);
    var departureDateTime = !departureDate ?
        arrivalDateTime.plus({ day: 2 }) :
        luxon_js_1.DateTime.fromJSDate(departureDate);
    var minDate = luxon_js_1.DateTime.now().toFormat('yyyy-MM-dd');
    var nextMonth = luxon_js_1.DateTime.now()
        .plus({ month: 1 });
    var maxDate = nextMonth.set({ day: nextMonth.daysInMonth }).toFormat('yyyy-MM-dd');
    (0, lib_js_1.renderBlock)('search-form-block', "\n    <form>\n      <fieldset class=\"search-filedset\">\n        <div class=\"row\">\n          <div>\n            <label for=\"city\">\u0413\u043E\u0440\u043E\u0434</label>\n            <input id=\"city\" type=\"text\" disabled value=\"\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\" />\n            <input type=\"hidden\" disabled value=\"59.9386,30.3141\" />\n          </div>\n          <!--<div class=\"providers\">\n            <label><input type=\"checkbox\" name=\"provider\" value=\"homy\" checked /> Homy</label>\n            <label><input type=\"checkbox\" name=\"provider\" value=\"flat-rent\" checked /> FlatRent</label>\n          </div>-->\n        </div>\n        <div class=\"row\">\n          <div>\n            <label for=\"check-in-date\">\u0414\u0430\u0442\u0430 \u0437\u0430\u0435\u0437\u0434\u0430</label>\n            <input \n                id=\"check-in-date\" \n                type=\"date\" \n                value=\"".concat(arrivalDateTime.toFormat('yyyy-MM-dd'), "\" \n                min=\"").concat(minDate, "\" \n                max=\"").concat(maxDate, "\" \n                name=\"checkin\" />\n          </div>\n          <div>\n            <label for=\"check-out-date\">\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430</label>\n            <input \n                id=\"check-out-date\" \n                type=\"date\" \n                value=\"").concat(departureDateTime.toFormat('yyyy-MM-dd'), "\" \n                min=\"").concat(minDate, "\" \n                max=\"").concat(maxDate, "\" \n                name=\"checkout\" />\n          </div>\n          <div>\n            <label for=\"max-price\">\u041C\u0430\u043A\u0441. \u0446\u0435\u043D\u0430 \u0441\u0443\u0442\u043E\u043A</label>\n            <input id=\"max-price\" type=\"text\" value=\"\" name=\"price\" class=\"max-price\" />\n          </div>\n          <div>\n            <div><button>\u041D\u0430\u0439\u0442\u0438</button></div>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n    "));
}
exports.renderSearchFormBlock = renderSearchFormBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMsb0RBQWdEO0FBRWhELFNBQWdCLFNBQVM7SUFDdkIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLElBQUksRUFBRTtRQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQyxDQUFBO0tBQ0g7QUFDSCxDQUFDO0FBUkQsOEJBUUM7QUFTRCwyQkFBMkI7QUFDM0IsU0FBUyxJQUFJOztJQUNYLElBQU0sSUFBSSxHQUFHLE1BQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQXNCLDBDQUFFLEtBQUssQ0FBQztJQUMxRSxJQUFNLE9BQU8sR0FBRyxNQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFzQiwwQ0FBRSxLQUFLLENBQUM7SUFDdEYsSUFBTSxRQUFRLEdBQUcsTUFBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFzQiwwQ0FBRSxLQUFLLENBQUM7SUFDeEYsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFBLE1BQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLDBDQUFFLEtBQUssQ0FBQSxDQUFDO0lBQ3BGLElBQU0sSUFBSSxHQUFHO1FBQ1gsSUFBSSxNQUFBO1FBQ0osT0FBTyxTQUFBO1FBQ1AsUUFBUSxVQUFBO1FBQ1IsUUFBUSxVQUFBO0tBQ1QsQ0FBQTtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNkLENBQUM7QUFNRCxTQUFTLE1BQU0sQ0FBQyxJQUFvQixFQUFFLEVBQWdEO0lBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakIsSUFBSSxHQUFHLENBQUM7SUFDUixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7UUFDZCxHQUFHLEdBQUcsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFBO0tBQ3ZCO1NBQU07UUFDTCxHQUFHLEdBQUcsRUFBRSxDQUFBO0tBQ1Q7SUFDRCxVQUFVLENBQUM7UUFDVCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2QsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7U0FDekI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUNSO0lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ1YsQ0FBQztBQUVELFNBQWdCLHFCQUFxQixDQUFFLFdBQWtCLEVBQUUsYUFBb0I7SUFDN0UsSUFBTSxlQUFlLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLG1CQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hHLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyQyxJQUFNLE9BQU8sR0FBRyxtQkFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RCxJQUFNLFNBQVMsR0FBRyxtQkFBUSxDQUFDLEdBQUcsRUFBRTtTQUM3QixJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNwQixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVuRixJQUFBLG9CQUFXLEVBQ1QsbUJBQW1CLEVBQ25CLHErQkFvQnFCLGVBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLHdDQUN4QyxPQUFPLHdDQUNQLE9BQU8sZ1VBUUwsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx3Q0FDMUMsT0FBTyx3Q0FDUCxPQUFPLHdlQWF6QixDQUNGLENBQUE7QUFDSCxDQUFDO0FBM0RELHNEQTJEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge0RhdGVUaW1lfSBmcm9tICcvbGliL2x1eG9uL2VzNi9sdXhvbi5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbmVycygpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgaWYgKGZvcm0pIHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmaW5kKClcbiAgICB9KVxuICB9XG59XG5cbmludGVyZmFjZSBTZWFyY2hGb3JtRGF0YSB7XG4gIGNpdHk6IHN0cmluZyxcbiAgY2hlY2tpbjogRGF0ZVRpbWUsXG4gIGNoZWNrb3V0OiBEYXRlVGltZSxcbiAgbWF4UHJpY2U6IG51bWJlclxufVxuXG4vLyDRhNGD0L3QutGG0LjRjy3QvtCx0YDQsNCx0L7RgtGH0LjQuiDRhNC+0YDQvNGLXG5mdW5jdGlvbiBmaW5kKCk6IHZvaWQge1xuICBjb25zdCBjaXR5ID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlO1xuICBjb25zdCBjaGVja2luID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVjay1pbi1kYXRlJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlO1xuICBjb25zdCBjaGVja291dCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2stb3V0LWRhdGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KT8udmFsdWU7XG4gIGNvbnN0IG1heFByaWNlID0gKyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4LXByaWNlJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlO1xuICBjb25zdCBkYXRhID0ge1xuICAgIGNpdHksXG4gICAgY2hlY2tpbixcbiAgICBjaGVja291dCxcbiAgICBtYXhQcmljZVxuICB9XG4gIHNlYXJjaChkYXRhKVxufVxuXG5pbnRlcmZhY2UgUGxhY2Uge1xuXG59XG5cbmZ1bmN0aW9uIHNlYXJjaChkYXRhOiBTZWFyY2hGb3JtRGF0YSwgY2I/OiAocGxhY2U6IEVycm9yIHwgUGxhY2VbXSkgPT4gRXJyb3IgfCBQbGFjZVtdKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIGxldCBjYjE7XG4gIGlmIChjYiA9PSBudWxsKSB7XG4gICAgY2IxID0gKHZhbHVlKSA9PiB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIGNiMSA9IGNiXG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmQgPCAwLjUpIHtcbiAgICAgIGNiMShuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCcpKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYjEoW10pXG4gICAgfVxuICB9LCAxMDAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrIChhcnJpdmFsRGF0ZT86IERhdGUsIGRlcGFydHVyZURhdGU/OiBEYXRlKSB7XG4gIGNvbnN0IGFycml2YWxEYXRlVGltZSA9ICFhcnJpdmFsRGF0ZSA/IERhdGVUaW1lLm5vdygpLnBsdXMoe2RheTogMX0pIDogRGF0ZVRpbWUuZnJvbUpTRGF0ZShhcnJpdmFsRGF0ZSk7XG4gIGNvbnN0IGRlcGFydHVyZURhdGVUaW1lID0gIWRlcGFydHVyZURhdGUgP1xuICAgIGFycml2YWxEYXRlVGltZS5wbHVzKHtkYXk6IDJ9KSA6XG4gICAgRGF0ZVRpbWUuZnJvbUpTRGF0ZShkZXBhcnR1cmVEYXRlKTtcbiAgY29uc3QgbWluRGF0ZSA9IERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gIGNvbnN0IG5leHRNb250aCA9IERhdGVUaW1lLm5vdygpXG4gICAgLnBsdXMoe21vbnRoOiAxfSk7XG4gIGNvbnN0IG1heERhdGUgPSBuZXh0TW9udGguc2V0KHtkYXk6IG5leHRNb250aC5kYXlzSW5Nb250aH0pLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgaWQ9XCJjaGVjay1pbi1kYXRlXCIgXG4gICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIiR7YXJyaXZhbERhdGVUaW1lLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyl9XCIgXG4gICAgICAgICAgICAgICAgbWluPVwiJHttaW5EYXRlfVwiIFxuICAgICAgICAgICAgICAgIG1heD1cIiR7bWF4RGF0ZX1cIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIke2RlcGFydHVyZURhdGVUaW1lLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyl9XCIgXG4gICAgICAgICAgICAgICAgbWluPVwiJHttaW5EYXRlfVwiIFxuICAgICAgICAgICAgICAgIG1heD1cIiR7bWF4RGF0ZX1cIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tvdXRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+0JzQsNC60YEuINGG0LXQvdCwINGB0YPRgtC+0Lo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbn1cbiJdfQ==