import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";
import { PalisadeConfigService } from "./config/palisade-config.service";
import { AccountModule } from "./modules/account/account.module";
import { AppModule } from "./modules/app/app.module";
import { EntryModule } from "./modules/entry/entry.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(PalisadeConfigService);

  const config = new DocumentBuilder()
    .setTitle('Palisade')
    .setDescription('The Palisade API, contains protected REST CRUD and GraphQL endpoints for easy consumption.')
    .setVersion('1.0')
    .build()


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8000);
}
bootstrap();
