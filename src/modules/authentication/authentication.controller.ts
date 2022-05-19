import { Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateAccountDto } from '../account/dto/create-account.dto';
import { Account } from '../account/entities/account.entity';
import { AuthenticationService } from './authentication.service';
import JwtAuthenticationGuard from './guard/jwt-auth.guard';
import { LocalAuthenticationGuard } from './guard/local-auth.guard';
import RequestWithUser from './interface/requestWithUser.interface';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('/login')
  async login(@Req() req: RequestWithUser, @Res() res: Response) {
    const { user } = req;
    const cookie = this.authenticationService.getCookieWithJwtToken(user._id)
    res.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return res.send(user);
  }


  @ApiOperation({
    summary: 'Create Account',
    description: 'This endpoint is used for creating an account.',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful response with the created accounts data.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the creation of your account, Please see error.',
  })
  @ApiBody({
    description: 'The data needed to create an account an object of type CreateAccountDto.',
    type: () => CreateAccountDto
  })
  @Post('/createAccount')
  create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return this.authenticationService.register(createAccountDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('/logout')
  async logOut(@Req() request: RequestWithUser, @Res() res: Response) {
    res.setHeader('Set-Cookie', this.authenticationService.getCookieForLogOut());
    return res.sendStatus(200);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('/authenticate')
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}
