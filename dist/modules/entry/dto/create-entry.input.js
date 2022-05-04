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
exports.CreateEntryInput = void 0;
const core_1 = require("@mikro-orm/core");
const graphql_1 = require("@nestjs/graphql");
const account_entity_1 = require("../../account/entities/account.entity");
const category_enum_1 = require("../enums/category.enum");
const priority_enum_1 = require("../enums/priority.enum");
let CreateEntryInput = class CreateEntryInput {
    constructor() {
        this.developer = new core_1.Collection(this);
    }
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(type => priority_enum_1.Priority),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(type => category_enum_1.Category),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(type => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateEntryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "area", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "toBeFixed", void 0);
__decorate([
    (0, graphql_1.Field)(type => [account_entity_1.Account], { nullable: true }),
    __metadata("design:type", Object)
], CreateEntryInput.prototype, "developer", void 0);
__decorate([
    (0, graphql_1.Field)(type => account_entity_1.Account),
    __metadata("design:type", Object)
], CreateEntryInput.prototype, "reporter", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateEntryInput.prototype, "isReadyForTesting", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "resolutionStatus", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateEntryInput.prototype, "closed", void 0);
CreateEntryInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEntryInput);
exports.CreateEntryInput = CreateEntryInput;
//# sourceMappingURL=create-entry.input.js.map