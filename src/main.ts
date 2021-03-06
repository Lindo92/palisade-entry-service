import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";
import { PalisadeConfigService } from "./config/palisade-config.service";
import { AppModule } from "./modules/app/app.module";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(PalisadeConfigService);

  const config = new DocumentBuilder()
    .setTitle('Palisade')
    .setDescription('The Palisade API, Your Wall against the encroaching bugs.')
    .setVersion('1.5')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(cookieParser());
  app.enableCors({ credentials: true, origin: true });
  await app.listen(8000);
}
bootstrap();
