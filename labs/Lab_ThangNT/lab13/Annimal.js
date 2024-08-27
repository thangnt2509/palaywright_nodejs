"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annimal = void 0;
var Annimal = /** @class */ (function () {
    function Annimal(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    Annimal.prototype.getName = function () {
        return this.name;
    };
    Annimal.prototype.getSpeed = function () {
        return this.speed;
    };
    return Annimal;
}());
exports.Annimal = Annimal;
