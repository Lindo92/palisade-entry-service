import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

/**
 * Class for supplying env variables to wherever their needed, just inject this class where you need to get the envs.
 * Also supplies shorthand for the real env variable names.
 */
@Injectable()
export class PalisadeConfigService {
  constructor(private configservice: ConfigService) { }

  get mongoURI(): string {
    return this.configservice.get<string>('palisade.MONGO_URI')
  }

  get secretKey(): string {
    return this.configservice.get<string>('palisade.JWT_SECRET_KEY')
  }
}