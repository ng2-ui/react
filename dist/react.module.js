"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var react_component_1 = require("./react.component");
exports.NguiReactComponent = react_component_1.NguiReactComponent;
var NguiReactModule = (function () {
    function NguiReactModule() {
    }
    return NguiReactModule;
}());
NguiReactModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, forms_1.FormsModule],
                declarations: [react_component_1.NguiReactComponent],
                exports: [react_component_1.NguiReactComponent]
            },] },
];
/** @nocollapse */
NguiReactModule.ctorParameters = function () { return []; };
exports.NguiReactModule = NguiReactModule;
//# sourceMappingURL=react.module.js.map