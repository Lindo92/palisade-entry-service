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
exports.AccountResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const account_service_1 = require("./account.service");
const account_entity_1 = require("./entities/account.entity");
const create_account_input_1 = require("./dto/create-account.input");
const update_account_input_1 = require("./dto/update-account.input");
let AccountResolver = class AccountResolver {
    constructor(accountService) {
        this.accountService = accountService;
    }
    createAccount(createAccountInput) {
        return this.accountService.create(createAccountInput);
    }
    findAll() {
        return this.accountService.findAll();
    }
    findOne(id) {
        return this.accountService.findOne(id);
    }
    updateAccount(updateAccountInput) {
        return this.accountService.update(updateAccountInput.id, updateAccountInput);
    }
    removeAccount(id) {
        return this.accountService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => account_entity_1.Account),
    __param(0, (0, graphql_1.Args)('createAccountInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_input_1.CreateAccountInput]),
    __metadata("design:returntype", void 0)
], AccountResolver.prototype, "createAccount", null);
__decorate([
    (0, graphql_1.Query)(() => [account_entity_1.Account], { name: 'account' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AccountResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => account_entity_1.Account, { name: 'account' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => account_entity_1.Account),
    __param(0, (0, graphql_1.Args)('updateAccountInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_account_input_1.UpdateAccountInput]),
    __metadata("design:returntype", void 0)
], AccountResolver.prototype, "updateAccount", null);
__decorate([
    (0, graphql_1.Mutation)(() => account_entity_1.Account),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AccountResolver.prototype, "removeAccount", null);
AccountResolver = __decorate([
    (0, graphql_1.Resolver)(() => account_entity_1.Account),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountResolver);
exports.AccountResolver = AccountResolver;
//# sourceMappingURL=account.resolver.js.map