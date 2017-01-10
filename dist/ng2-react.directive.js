"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var React = require("react");
var ReactDOM = require("react-dom");
var ng2_react_app_component_1 = require("./ng2-react.app.component");
var Ng2ReactDirective = (function () {
    function Ng2ReactDirective(elementRef) {
        this.reactChildren = [];
        this.reactProps = {};
        this.element = elementRef.nativeElement;
    }
    Ng2ReactDirective.prototype.ngOnInit = function () {
        if (this.reactComponent) {
            var comp = this.reactComponent;
            var props = this.reactProps;
            var state = this.reactState;
            var reactWrapperEl = React.createElement(ng2_react_app_component_1.Ng2ReactAppComponent, {
                comp: comp,
                props: props,
                state: state
            });
            this.reactAppInstance = ReactDOM.render(reactWrapperEl, this.element);
            this.reactComponentInstance = this.reactAppInstance.reactComponentInstance;
        }
    };
    Ng2ReactDirective.prototype.setState = function (state) {
        this.reactAppInstance.setState(state);
    };
    return Ng2ReactDirective;
}());
__decorate([
    core_1.Input('reactChildren'),
    __metadata("design:type", Array)
], Ng2ReactDirective.prototype, "reactChildren", void 0);
__decorate([
    core_1.Input('reactComponent'),
    __metadata("design:type", Object)
], Ng2ReactDirective.prototype, "reactComponent", void 0);
__decorate([
    core_1.Input('reactState'),
    __metadata("design:type", Object)
], Ng2ReactDirective.prototype, "reactState", void 0);
__decorate([
    core_1.Input('reactProps'),
    __metadata("design:type", Object)
], Ng2ReactDirective.prototype, "reactProps", void 0);
Ng2ReactDirective = __decorate([
    core_1.Directive({
        selector: 'ng2-react, [ng2-react]',
        exportAs: 'ng2-react'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], Ng2ReactDirective);
exports.Ng2ReactDirective = Ng2ReactDirective;
//# sourceMappingURL=ng2-react.directive.js.map