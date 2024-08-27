"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnnimalManagement = /** @class */ (function () {
    function AnnimalManagement() {
    }
    AnnimalManagement.prototype.getFastestAnnimal = function (annimalList) {
        var fastestAnnimal = annimalList[0];
        annimalList.forEach(function (annimal) {
            if (annimal.getSpeed() > fastestAnnimal.getSpeed()) {
                fastestAnnimal = annimal;
            }
        });
        return fastestAnnimal;
    };
    return AnnimalManagement;
}());
exports.default = AnnimalManagement;
