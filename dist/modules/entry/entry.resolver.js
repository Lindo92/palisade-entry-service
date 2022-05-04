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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const entry_service_1 = require("./entry.service");
const entry_entity_1 = require("./entities/entry.entity");
const create_entry_input_1 = require("./dto/create-entry.input");
const update_entry_input_1 = require("./dto/update-entry.input");
let EntryResolver = class EntryResolver {
    constructor(entryService) {
        this.entryService = entryService;
    }
    createEntry(createEntryInput) {
        return this.entryService.create(createEntryInput);
    }
    findAll() {
        return this.entryService.findAll();
    }
    findOne(id) {
        return this.entryService.findOne(id);
    }
    updateEntry(updateEntryInput) {
        return this.entryService.update(updateEntryInput.id, updateEntryInput);
    }
    removeEntry(id) {
        return this.entryService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => entry_entity_1.Entry),
    __param(0, (0, graphql_1.Args)('createEntryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entry_input_1.CreateEntryInput]),
    __metadata("design:returntype", void 0)
], EntryResolver.prototype, "createEntry", null);
__decorate([
    (0, graphql_1.Query)(() => [entry_entity_1.Entry], { name: 'entry' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntryResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => entry_entity_1.Entry, { name: 'entry' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntryResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => entry_entity_1.Entry),
    __param(0, (0, graphql_1.Args)('updateEntryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_entry_input_1.UpdateEntryInput]),
    __metadata("design:returntype", void 0)
], EntryResolver.prototype, "updateEntry", null);
__decorate([
    (0, graphql_1.Mutation)(() => entry_entity_1.Entry),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntryResolver.prototype, "removeEntry", null);
EntryResolver = __decorate([
    (0, graphql_1.Resolver)(() => entry_entity_1.Entry),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], EntryResolver);
exports.EntryResolver = EntryResolver;
//# sourceMappingURL=entry.resolver.js.map