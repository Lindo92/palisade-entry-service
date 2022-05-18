import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthenticationService } from "../authentication.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authenticationService: AuthenticationService) { super() }

  async validate(username: string, password: string): Promise<any> {
    const account = await this.authenticationService.validateAccount(username, password);
    if (!account) {
      throw new UnauthorizedException();
    }
    return account;
  }

}