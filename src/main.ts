import { NestFactory } from "@nestjs/core";
import { PalisadeConfigService } from "./config/palisade-config.service";
import { AppModule } from "./modules/app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(PalisadeConfigService);
  await app.listen(8000);
}
bootstrap();
