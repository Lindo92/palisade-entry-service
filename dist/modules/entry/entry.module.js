"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryModule = void 0;
const common_1 = require("@nestjs/common");
const entry_service_1 = require("./entry.service");
const entry_resolver_1 = require("./entry.resolver");
const entry_entity_1 = require("./entities/entry.entity");
const mongoose_1 = require("@nestjs/mongoose");
let EntryModule = class EntryModule {
};
EntryModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: entry_entity_1.Entry.name, schema: entry_entity_1.EntrySchema }])],
        providers: [entry_resolver_1.EntryResolver, entry_service_1.EntryService]
    })
], EntryModule);
exports.EntryModule = EntryModule;
//# sourceMappingURL=entry.module.js.map