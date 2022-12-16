"use strict";
exports.__esModule = true;
exports.safeJsonParse = void 0;
function safeJsonParse(data) {
    try {
        return JSON.parse(data);
    }
    catch (exception) {
        return null;
    }
}
exports.safeJsonParse = safeJsonParse;
