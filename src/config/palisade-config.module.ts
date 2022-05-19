import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { PalisadeConfigService } from "./palisade-config.service";
import palisadeConfiguration from "./palisade.configuration";

/**
 * Module for handling envs for palisade, all we really do here is bind together our config service aswell as perform validation on the needed env variables.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [palisadeConfiguration],
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
        JWT_SECRET_KEY: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    })
  ],
  providers: [PalisadeConfigService],
  exports: [PalisadeConfigService]
})

export class PalisadeConfigModule { }