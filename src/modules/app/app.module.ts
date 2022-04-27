import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";

@Module({
  imports: [MikroOrmModule.forRoot({
    entities: ['../entry/model'],
    dbName: 'palisade',
    type: 'mongo',
    clientUrl: 'INSERT MONGO URL HERE'
  })],
})
export class AppModule {}
