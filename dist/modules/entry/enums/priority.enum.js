"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = void 0;
const graphql_1 = require("@nestjs/graphql");
var Priority;
(function (Priority) {
    Priority["LOW"] = "low";
    Priority["MEDIUM"] = "medium";
    Priority["HIGH"] = "high";
    Priority["CRITICAL"] = "critical";
})(Priority = exports.Priority || (exports.Priority = {}));
(0, graphql_1.registerEnumType)(Priority, {
    name: 'Priority',
});
//# sourceMappingURL=priority.enum.js.map