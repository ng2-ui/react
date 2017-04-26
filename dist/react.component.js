"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var React = require("react");
var ReactDOM = require("react-dom");
var NguiReactComponent = (function () {
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
NguiReactComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ngui-react',
                exportAs: 'ngui-react',
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
NguiReactComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
NguiReactComponent.propDecorators = {
    'children': [{ type: core_1.ContentChildren, args: [NguiReactComponent,] },],
    'reactComponent': [{ type: core_1.Input, args: ['reactComponent',] },],
    'reactState': [{ type: core_1.Input, args: ['reactState',] },],
    'reactProps': [{ type: core_1.Input, args: ['reactProps',] },],
};
exports.NguiReactComponent = NguiReactComponent;
//# sourceMappingURL=react.component.js.map