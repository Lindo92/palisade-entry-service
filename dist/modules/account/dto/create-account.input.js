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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_role_enum_1 = require("../enums/user-role.enum");
let CreateAccountInput = class CreateAccountInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'The first name of the account holder.' }),
    __metadata("design:type", String)
], CreateAccountInput.prototype, "firstname", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'The last name of the account holder.' }),
    __metadata("design:type", String)
], CreateAccountInput.prototype, "lastname", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'The email of the account holder.' }),
    __metadata("design:type", String)
], CreateAccountInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'The password of the account holder.' }),
    __metadata("design:type", String)
], CreateAccountInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(type => user_role_enum_1.UserRole, { description: 'The role of the account holder. Accaptable values are: USER, DEVELOPER and ADMIN.' }),
    __metadata("design:type", String)
], CreateAccountInput.prototype, "role", void 0);
CreateAccountInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAccountInput);
exports.CreateAccountInput = CreateAccountInput;
//# sourceMappingURL=create-account.input.js.map