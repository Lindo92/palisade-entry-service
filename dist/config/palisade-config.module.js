"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalisadeConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const palisade_config_service_1 = require("./palisade-config.service");
const palisade_configuration_1 = require("./palisade.configuration");
let PalisadeConfigModule = class PalisadeConfigModule {
};
PalisadeConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [palisade_configuration_1.default],
                validationSchema: Joi.object({
                    MONGO_URI: Joi.string().required(),
                }),
            })
        ],
        providers: [palisade_config_service_1.PalisadeConfigService],
        exports: [palisade_config_service_1.PalisadeConfigService]
    })
], PalisadeConfigModule);
exports.PalisadeConfigModule = PalisadeConfigModule;
//# sourceMappingURL=palisade-config.module.js.map