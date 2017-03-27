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
var NguiReactComponent = NguiReactComponent_1 = (function () {
    function NguiReactComponent(elementRef) {
        this.reactProps = {};
        this.element = elementRef.nativeElement;
    }
    //make it sure reactComponent is provided
    NguiReactComponent.prototype.ngOnInit = function () {
        if (!this.reactComponent) {
            throw new Error("Attribute `reactComponent` is required");
        }
    };
    // set parent of react component, and create react element
    NguiReactComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //set parent, and collect children
        var children = [];
        this.children.forEach(function (nguiReactComp) {
            if (nguiReactComp !== _this) {
                nguiReactComp.parentNguiReact = _this;
                children.push(nguiReactComp.reactElement);
            }
        });
        // create react component
        var comp = this.reactComponent;
        var props = this.reactProps;
        props.key = 'key' + Math.round(Math.random() * (Math.pow(10, 15)));
        this.reactElement = React.createElement(comp, props, children);
    };
    NguiReactComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //console.log('>>> Rendering', this);
        setTimeout(function () {
            if (!_this.parentNguiReact) {
                var callback = function () { };
                _this.reactInstance = ReactDOM.render(_this.reactElement, _this.element, callback);
                _this.reactState && _this.reactInstance.setState(_this.reactState);
            }
        });
    };
    return NguiReactComponent;
}());
__decorate([
    core_1.ContentChildren(NguiReactComponent_1),
    __metadata("design:type", core_1.QueryList)
], NguiReactComponent.prototype, "children", void 0);
__decorate([
    core_1.Input('reactComponent'),
    __metadata("design:type", Object)
], NguiReactComponent.prototype, "reactComponent", void 0);
__decorate([
    core_1.Input('reactState'),
    __metadata("design:type", Object)
], NguiReactComponent.prototype, "reactState", void 0);
__decorate([
    core_1.Input('reactProps'),
    __metadata("design:type", Object)
], NguiReactComponent.prototype, "reactProps", void 0);
NguiReactComponent = NguiReactComponent_1 = __decorate([
    core_1.Component({
        selector: 'ngui-react',
        exportAs: 'ngui-react',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NguiReactComponent);
exports.NguiReactComponent = NguiReactComponent;
var NguiReactComponent_1;
//# sourceMappingURL=react.component.js.map