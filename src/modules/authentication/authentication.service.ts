import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../account/account.service';
import { CreateAccountDto } from '../account/dto/create-account.dto';
const bcrypt = require('bcrypt')
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthenticationService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService) { }

  async register(createAccountDto: CreateAccountDto) {
    const hashedPassword = await bcrypt.hash(createAccountDto.password, 10);
    try {
      const createdAccount = await this.accountService.create({
        ...createAccountDto,
        password: hashedPassword
      })
      createdAccount.password = undefined;
      return createdAccount;
    } catch (error) {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAuthenticatedAccount(username: string, plainTextPassword: string) {
    try {
      const account = await this.accountService.findOneRaw({ username: username });
      await this.verifyPassword(plainTextPassword, account.password);
      account.password = undefined;
      return account;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  public getCookieWithJwtToken(_id: string) {
    const payload: TokenPayload = { _id };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }

}
