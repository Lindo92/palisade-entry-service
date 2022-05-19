import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PalisadeConfigModule } from "src/config/palisade-config.module";
import { PalisadeConfigService } from "src/config/palisade-config.service";
import { AccountModule } from "../account/account.module";
import { AuthenticationModule } from "../authentication/authentication.module";

import { EntryModule } from "../entry/entry.module";

@Module({
  imports: [AccountModule,
    EntryModule,
    PalisadeConfigModule,
    AuthenticationModule,
    MongooseModule.forRootAsync({
      useFactory: (configService: PalisadeConfigService) => ({
        uri: configService.mongoURI
      }),
      imports: [PalisadeConfigModule],
      inject: [PalisadeConfigService]
    }),
  ],
})
export class AppModule { }
