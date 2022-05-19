import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';
import { Account } from 'src/modules/account/entities/account.entity';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super();
  }
  async validate(username: string, password: string): Promise<Account> {
    return this.authenticationService.getAuthenticatedAccount(username, password);
  }
}