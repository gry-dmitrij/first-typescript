"use strict";
exports.__esModule = true;
exports.renderToast = exports.renderBlock = void 0;
function renderBlock(elementId, html) {
    var element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = html;
    }
}
exports.renderBlock = renderBlock;
function renderToast(message, action) {
    var messageText = '';
    if (message != null) {
        messageText = "\n      <div id=\"info-block\" class=\"info-block ".concat(message.type, "\">\n        <p>").concat(message.text, "</p>\n        <button id=\"toast-main-action\">").concat((action === null || action === void 0 ? void 0 : action.name) || 'Закрыть', "</button>\n      </div>\n    ");
    }
    renderBlock('toast-block', messageText);
    var button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null);
        };
    }
}
exports.renderToast = renderToast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVVBLFNBQWdCLFdBQVcsQ0FBRSxTQUFnQixFQUFFLElBQVk7SUFDekQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNsRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0tBQ3pCO0FBQ0gsQ0FBQztBQUxELGtDQUtDO0FBRUQsU0FBZ0IsV0FBVyxDQUFFLE9BQXVCLEVBQUUsTUFBZTtJQUNuRSxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFFcEIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1FBQ25CLFdBQVcsR0FBRyw0REFDNkIsT0FBTyxDQUFDLElBQUksNkJBQzlDLE9BQU8sQ0FBQyxJQUFJLDREQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUyxrQ0FFN0QsQ0FBQTtLQUNGO0lBRUQsV0FBVyxDQUNULGFBQWEsRUFDYixXQUFXLENBQ1osQ0FBQTtJQUVELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRztZQUNmLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDNUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2FBQ2pCO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25CLENBQUMsQ0FBQTtLQUNGO0FBQ0gsQ0FBQztBQTFCRCxrQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIHR5cGU6IHN0cmluZyxcbiAgdGV4dDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBBY3Rpb24ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGhhbmRsZXI6IEZ1bmN0aW9uXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCbG9jayAoZWxlbWVudElkOnN0cmluZywgaHRtbDogc3RyaW5nKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpXG4gIGlmIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvYXN0IChtZXNzYWdlOiBNZXNzYWdlIHwgbnVsbCwgYWN0aW9uPzogQWN0aW9uKSB7XG4gIGxldCBtZXNzYWdlVGV4dCA9ICcnXG5cbiAgaWYgKG1lc3NhZ2UgIT0gbnVsbCkge1xuICAgIG1lc3NhZ2VUZXh0ID0gYFxuICAgICAgPGRpdiBpZD1cImluZm8tYmxvY2tcIiBjbGFzcz1cImluZm8tYmxvY2sgJHttZXNzYWdlLnR5cGV9XCI+XG4gICAgICAgIDxwPiR7bWVzc2FnZS50ZXh0fTwvcD5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInRvYXN0LW1haW4tYWN0aW9uXCI+JHthY3Rpb24/Lm5hbWUgfHwgJ9CX0LDQutGA0YvRgtGMJ308L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgfVxuXG4gIHJlbmRlckJsb2NrKFxuICAgICd0b2FzdC1ibG9jaycsXG4gICAgbWVzc2FnZVRleHRcbiAgKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1tYWluLWFjdGlvbicpXG4gIGlmIChidXR0b24gIT0gbnVsbCkge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYWN0aW9uICE9IG51bGwgJiYgYWN0aW9uLmhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICBhY3Rpb24uaGFuZGxlcigpXG4gICAgICB9XG4gICAgICByZW5kZXJUb2FzdChudWxsKVxuICAgIH1cbiAgfVxufVxuIl19