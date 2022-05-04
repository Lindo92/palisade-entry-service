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
exports.EntrySchema = exports.Entry = void 0;
const graphql_1 = require("@nestjs/graphql");
const category_enum_1 = require("../enums/category.enum");
const priority_enum_1 = require("../enums/priority.enum");
const account_entity_1 = require("../../account/entities/account.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Entry = class Entry {
};
__decorate([
    (0, graphql_1.Field)({ description: 'The title of the entry, should be concise and hint at what the issue is about.' }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Entry.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'The description of the entry, a longer description of the issue, laying out more details.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Entry.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(type => priority_enum_1.Priority, { nullable: true, description: 'How prioritized the issue should be, can be LOW, MEDIUM, HIGH or CRITICAL.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Entry.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(type => category_enum_1.Category, { nullable: true, description: 'The category that the entry belongs to, can be FRONTEND, BACKEND, or DOCUMENTATION.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Entry.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(type => [String], { nullable: true, description: 'An array of URIs of images relevant to the entry.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Array)
], Entry.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'A closer description of which area of the application the entry pertains to.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Entry.prototype, "area", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'The name of the product that the entry pertains to.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Entry.prototype, "product", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'A promise set by the developer assigned to the entry, should be the number of the version of the app when the entry should be resolved.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Entry.prototype, "toBeFixed", void 0);
__decorate([
    (0, graphql_1.Field)(type => [account_entity_1.Account], { nullable: true, description: 'An array of account Ids which in turn references the developer or developers assigned to the issue.' }),
    (0, mongoose_1.Prop)({ required: false, type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Account' }] }),
    __metadata("design:type", Array)
], Entry.prototype, "assignedDeveloperIds", void 0);
__decorate([
    (0, graphql_1.Field)(type => account_entity_1.Account, { description: 'A id reference to the account that created the entry.' }),
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Account' }),
    __metadata("design:type", account_entity_1.Account)
], Entry.prototype, "creatorAccountId", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: false, description: 'A flag to see if a issue is ready for testing or not, false by default.' }),
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Entry.prototype, "isReadyForTesting", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'The resultion status of the issue, examples are that the issue was ignored, is fixed, or that it is fixed but with caveats.' }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Entry.prototype, "resolutionStatus", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: false, description: 'A boolean for seeing if the issue has been closed or not. Default value is false.' }),
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Entry.prototype, "closed", void 0);
Entry = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)({ timestamps: true })
], Entry);
exports.Entry = Entry;
exports.EntrySchema = mongoose_1.SchemaFactory.createForClass(Entry);
//# sourceMappingURL=entry.entity.js.map