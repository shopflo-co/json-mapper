"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonMapper = void 0;
var jsonpath = require("jsonpath");
var JsonMapper = /** @class */ (function () {
    function JsonMapper() {
        var _this = this;
        this.map = function (mapping, payload) {
            var out = {};
            for (var key in mapping) {
                if (_this.isAnIJsonMapper(mapping[key])) {
                    out = _this.iJsonMapperTypeFunc(payload, mapping, key, out);
                }
                else if (typeof mapping[key] === 'object' && Array.isArray(mapping[key])) {
                    out = _this.objectArrayFunc(payload, mapping, key, out);
                }
                else if (typeof mapping[key] === 'object') {
                    out = _this.objFunc(payload, mapping, key, out);
                }
                else {
                    out = _this.genericFunc(mapping, key, out);
                }
            }
            return out;
        };
        this.iJsonMapperTypeFunc = function (payload, mapping, key, out) {
            var jpOut = jsonpath.apply(payload, mapping[key].path, mapping[key].transformer ? mapping[key].transformer : function (x) { return x; });
            if (jpOut[0]) {
                out[key] = jpOut[0].value;
            }
            else if (mapping[key].defaultValue !== undefined) {
                out[key] = mapping[key].defaultValue;
            }
            else {
                console.log(key, mapping[key]);
                out[key] = mapping[key];
            }
            return out;
        };
        this.objectArrayFunc = function (payload, mapping, key, out) {
            var keyArr = mapping[key];
            var outArr = [];
            for (var i = 0; i < keyArr.length; i) {
                outArr.push(_this.map(keyArr[i], payload));
            }
            out[key] = outArr;
            return out;
        };
        this.objFunc = function (payload, mapping, key, out) {
            out[key] = _this.map(mapping[key], payload);
            return out;
        };
        this.genericFunc = function (mapping, key, out) {
            out[key] = mapping[key];
            return out;
        };
        //TODO: Handle array to array deep mapping
    }
    JsonMapper.prototype.isAnIJsonMapper = function (obj) {
        return obj.path || obj.transformer || obj.defaultValue;
    };
    return JsonMapper;
}());
exports.JsonMapper = JsonMapper;
