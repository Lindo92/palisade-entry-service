import { MikroOrmModule } from "@mikro-orm/nestjs";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { PalisadeConfigModule } from "src/config/palisade-config.module";
import { PalisadeConfigService } from "src/config/palisade-config.service";
import { AccountModule } from "../account/account.module";
import { EntryModule } from "../entry/entry.module";

@Module({
  imports: [EntryModule,
    AccountModule,
    PalisadeConfigModule,
    MikroOrmModule.forRootAsync({
      imports: [PalisadeConfigService],
      useFactory: async (configService: PalisadeConfigService) => ({
        entities: ['../entry/entities/*.entity.ts', '../account/entities*.entity.ts'],
        dbName: configService.dbName,
        type: 'mongo',
        clientUrl: configService.mongoURI
      })
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [EntryModule],
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join('src/schema.gql')
    })
  ],
})
export class AppModule { }
