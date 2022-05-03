import { NestFactory } from "@nestjs/core";
import { PalisadeConfigService } from "./config/palisade-config.service";
import { AppModule } from "./modules/app/app.module";
//TODO: 
// seperate account into its own module, set it up with microorm, import into app module.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(PalisadeConfigService);
  await app.listen(8000);
}
bootstrap();
