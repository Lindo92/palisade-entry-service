"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const path_1 = require("path");
const palisade_config_module_1 = require("../../config/palisade-config.module");
const palisade_config_service_1 = require("../../config/palisade-config.service");
const account_module_1 = require("../account/account.module");
const entry_module_1 = require("../entry/entry.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [account_module_1.AccountModule,
            entry_module_1.EntryModule,
            palisade_config_module_1.PalisadeConfigModule,
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: (configService) => ({
                    uri: configService.mongoURI
                }),
                imports: [palisade_config_module_1.PalisadeConfigModule],
                inject: [palisade_config_service_1.PalisadeConfigService]
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                debug: true,
                playground: true,
                autoSchemaFile: (0, path_1.join)('src/schema.gql'),
            })
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map