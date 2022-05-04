"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const palisade_config_service_1 = require("./config/palisade-config.service");
const app_module_1 = require("./modules/app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(palisade_config_service_1.PalisadeConfigService);
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map