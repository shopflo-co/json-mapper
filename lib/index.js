"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonMapper_1 = require("./jsonMapper");
var sfJsonMapper = function (eventMapping, analyticsData) {
    var mappedJson = new jsonMapper_1.JsonMapper().map(eventMapping, analyticsData);
    return mappedJson;
};
exports.default = sfJsonMapper;
