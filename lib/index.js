"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringtoLowercase = void 0;
var StringtoLowercase = /** @class */ (function () {
    function StringtoLowercase() {
    }
    StringtoLowercase.ToLower = function (stringName) {
        var lower = "";
        for (var i = 0; i < stringName.length; i++) {
            var value = stringName.charCodeAt(i);
            if (value >= 65 && value <= 90) {
                lower += String.fromCharCode(value + 32);
            }
            else {
                lower += stringName[i];
            }
        }
        console.log(lower);
    };
    return StringtoLowercase;
}());
exports.StringtoLowercase = StringtoLowercase;
