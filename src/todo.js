"use strict";
exports.__esModule = true;
exports.getTodosByCount = void 0;
function getTodosByCount(count) {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (responce) { return responce.json(); })
        .then(function (responce) {
        var result = responce;
        if (result.length > count) {
            result.length = count;
        }
        console.log(result);
    });
}
exports.getTodosByCount = getTodosByCount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT0EsU0FBZ0IsZUFBZSxDQUFDLEtBQVk7SUFDMUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO1NBQ2hELElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7U0FDakMsSUFBSSxDQUFDLFVBQUEsUUFBUTtRQUNaLElBQU0sTUFBTSxHQUFHLFFBQWtCLENBQUM7UUFDbEMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRTtZQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUN0QjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdkIsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDO0FBWEQsMENBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVG9kbyB7XG4gIHVzZXJJZDogbnVtYmVyLFxuICBpZDogbnVtYmVyLFxuICB0aXRsZTogc3RyaW5nLFxuICBjb21wbGV0ZWQ6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9zQnlDb3VudChjb3VudDpudW1iZXIpIHtcbiAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2RvcycpXG4gICAgLnRoZW4ocmVzcG9uY2UgPT4gcmVzcG9uY2UuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbmNlICA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZXNwb25jZSBhcyBUb2RvW107XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IGNvdW50KSB7XG4gICAgICAgIHJlc3VsdC5sZW5ndGggPSBjb3VudFxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICB9KVxuXG59XG4iXX0=