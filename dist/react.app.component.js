"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var NguiReactAppComponent = (function (_super) {
    __extends(NguiReactAppComponent, _super);
    function NguiReactAppComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.state = _this.props['state'];
        _this.reactComponent = _this.props['comp'];
        _this.reactComponentProps = _this.props['props'];
        _this.reactComponentProps.ref = function (ref) { _this.reactComponentInstance = ref; };
        return _this;
    }
    NguiReactAppComponent.prototype.render = function () {
        var comp = this.reactComponent;
        var props = this.getAppStateProps(this.reactComponentProps);
        return React.createElement(comp, props);
    };
    /**
     * I could not set `this.state.xxx` as a prop from Angular-side simply because there is no `this.state`
     * so, all `this.state.xxx` will be defined as  string `APPSTATE:xxx` from Angular-side
     * this APPSTATE:xxx string should be converted to `this.state.xxx` for proper React execution
     * However, you cannot simply assign this.state[xxx] because it will copy by value of this.state[xxx]
     * so, I needed to create a function to return this.state.xxx without copying a value but just an expression
     * then copy/pasted all other properties, then return the props
     */
    NguiReactAppComponent.prototype.getAppStateProps = function (props) {
        var ret = {};
        var allKeys = Object.keys(props);
        var appStateKeys = allKeys.filter(function (k) {
            return typeof props[k] === 'string' && props[k].startsWith('APPSTATE:');
        });
        var otherKeys = allKeys.filter(function (k) { return appStateKeys.indexOf(k) === -1; });
        // console.log('allKeys', allKeys, 'appStateKeys', appStateKeys, 'otherKeys', otherKeys);
        var appStateProps = {};
        appStateKeys.forEach(function (k) { return appStateProps[k] = props[k]; });
        var appStateJsonProps = JSON.stringify(appStateProps);
        var retVal = appStateJsonProps.replace(/\"APPSTATE:([^"]+)"/, function (m, $1) { return "this.state." + $1; });
        var fn = Function('return' + retVal).bind(this);
        ret = fn();
        otherKeys.forEach(function (k) { return ret[k] = props[k]; });
        return ret;
    };
    return NguiReactAppComponent;
}(React.Component));
exports.NguiReactAppComponent = NguiReactAppComponent;
//# sourceMappingURL=react.app.component.js.map