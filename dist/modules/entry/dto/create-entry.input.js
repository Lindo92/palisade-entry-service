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
const graphql_1 = require("@nestjs/graphql");
const category_enum_1 = require("../enums/category.enum");
const priority_enum_1 = require("../enums/priority.enum");
let CreateEntryInput = class CreateEntryInput {
};
__decorate([
    (0, graphql_1.Field)({ description: 'The title of the entry, should be concise and hint at what the issue is about.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'The description of the entry, a longer description of the issue, laying out more details.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(type => priority_enum_1.Priority, { nullable: true, description: 'How prioritized the issue should be, can be LOW, MEDIUM, HIGH or CRITICAL.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(type => category_enum_1.Category, { nullable: true, description: 'The category that the entry belongs to, can be FRONTEND, BACKEND, or DOCUMENTATION.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(type => [String], { nullable: true, description: 'An array of URIs of images relevant to the entry.' }),
    __metadata("design:type", Array)
], CreateEntryInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'A closer description of which area of the application the entry pertains to.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "area", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'The name of the product that the entry pertains to.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'A promise set by the developer assigned to the entry, should be the number of the version of the app when the entry should be resolved.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "toBeFixed", void 0);
__decorate([
    (0, graphql_1.Field)(type => [String], { nullable: true, description: 'An array of account Ids which in turn references the developer or developers assigned to the issue.' }),
    __metadata("design:type", Array)
], CreateEntryInput.prototype, "assignedDeveloperIds", void 0);
__decorate([
    (0, graphql_1.Field)({ description: 'A id reference to the account that created the entry.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "creatorAccountId", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: false, description: 'A flag to see if a issue is ready for testing or not, false by default.' }),
    __metadata("design:type", Boolean)
], CreateEntryInput.prototype, "isReadyForTesting", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'The resultion status of the issue, examples are that the issue was ignored, is fixed, or that it is fixed but with caveats.' }),
    __metadata("design:type", String)
], CreateEntryInput.prototype, "resolutionStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: false, description: 'A boolean for seeing if the issue has been closed or not. Default value is false.' }),
    __metadata("design:type", Boolean)
], CreateEntryInput.prototype, "closed", void 0);
CreateEntryInput = __decorate([
    (0, graphql_1.InputType)()
], CreateEntryInput);
exports.CreateEntryInput = CreateEntryInput;
//# sourceMappingURL=create-entry.input.js.map