"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const graphql_1 = require("@nestjs/graphql");
var Category;
(function (Category) {
    Category["FRONTEND"] = "frontend";
    Category["DOCUMENTATION"] = "documentation";
    Category["BACKEND"] = "backend";
})(Category = exports.Category || (exports.Category = {}));
(0, graphql_1.registerEnumType)(Category, {
    name: 'Category',
});
//# sourceMappingURL=category.enum.js.map