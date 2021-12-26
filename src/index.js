"use strict";
exports.__esModule = true;
var search_form_js_1 = require("./search-form.js");
var search_results_js_1 = require("./search-results.js");
var user_js_1 = require("./user.js");
var lib_js_1 = require("./lib.js");
window.addEventListener('DOMContentLoaded', function () {
    (0, user_js_1.renderUserBlock)('Wade Warren', '/img/avatar.png', 1);
    (0, search_form_js_1.renderSearchFormBlock)();
    (0, search_results_js_1.renderSearchStubBlock)();
    (0, lib_js_1.renderToast)({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: function () { console.log('Уведомление закрыто'); } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF3RDtBQUN4RCx5REFBMkQ7QUFDM0QscUNBQTJDO0FBQzNDLG1DQUFzQztBQUV0QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDMUMsSUFBQSx5QkFBZSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUUsQ0FBQTtJQUNwRCxJQUFBLHNDQUFxQixHQUFFLENBQUE7SUFDdkIsSUFBQSx5Q0FBcUIsR0FBRSxDQUFBO0lBQ3ZCLElBQUEsb0JBQVcsRUFDUCxFQUFDLElBQUksRUFBRSwyREFBMkQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQ3BGLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUMsQ0FDdkUsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtZm9ybS5qcydcbmltcG9ydCB7IHJlbmRlclNlYXJjaFN0dWJCbG9jayB9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMuanMnXG5pbXBvcnQgeyByZW5kZXJVc2VyQmxvY2sgfSBmcm9tICcuL3VzZXIuanMnXG5pbXBvcnQgeyByZW5kZXJUb2FzdCB9IGZyb20gJy4vbGliLmpzJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgcmVuZGVyVXNlckJsb2NrKCdXYWRlIFdhcnJlbicsJy9pbWcvYXZhdGFyLnBuZycsIDEgKVxuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soKVxuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKVxuICByZW5kZXJUb2FzdChcbiAgICAgIHt0ZXh0OiAn0K3RgtC+INC/0YDQuNC80LXRgCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPLiDQmNGB0L/QvtC70YzQt9GD0LnRgtC1INC10LPQviDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LgnLCB0eXBlOiAnc3VjY2Vzcyd9LFxuICAgICAge25hbWU6ICfQn9C+0L3Rj9C7JywgaGFuZGxlcjogKCkgPT4ge2NvbnNvbGUubG9nKCfQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC30LDQutGA0YvRgtC+Jyl9fVxuICApXG59KVxuIl19