import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import Joi from "joi";
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
        DB_NAME: Joi.string().required(),
      }),
    })
  ],
  providers: [],
  exports: []
})

export class PalisadeConfigModule { }