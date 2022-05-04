import { MikroOrmModule } from "@mikro-orm/nestjs";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { join } from "path";
import { PalisadeConfigModule } from "src/config/palisade-config.module";
import { PalisadeConfigService } from "src/config/palisade-config.service";
import { AccountModule } from "../account/account.module";
import { EntryModule } from "../entry/entry.module";

@Module({
  imports: [AccountModule,                                                                                                        
    EntryModule,
    PalisadeConfigModule,
    MongooseModule.forRootAsync({

      useFactory: (configService: PalisadeConfigService) => ({
        uri: configService.mongoURI
      }),
      imports: [PalisadeConfigModule],
      inject: [PalisadeConfigService]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join('src/schema.gql'),
    })
  ],
})
export class AppModule { }
