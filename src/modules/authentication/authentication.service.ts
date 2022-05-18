import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';
import { UpdateAccountDto } from '../account/dto/update-account.dto';
import { Account, AccountDocument } from '../account/entities/account.entity';

@Injectable()
export class AuthenticationService {
  constructor(private readonly accountService: AccountService, private readonly jwtService: JwtService) { }

  async validateAccount(username: string, password: string): Promise<unknown> {
    const account = await this.accountService.findOneRaw({ username: username });
    if (account && account.password === password) {
      const { password, ...result } = account;
      return result;
    }
    return null;
  }

  async login(account: any) {
    const payload = { username: account.username, sub: account._id };
    return { access_token: this.jwtService.sign(payload) }
  }
}
