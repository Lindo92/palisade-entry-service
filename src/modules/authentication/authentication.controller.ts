import { Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateAccountDto } from '../account/dto/create-account.dto';
import { Account } from '../account/entities/account.entity';
import { AuthenticationService } from './authentication.service';
import JwtAuthenticationGuard from './guard/jwt-auth.guard';
import { LocalAuthenticationGuard } from './guard/local-auth.guard';
import RequestWithUser from './interface/requestWithUser.interface';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }


  @ApiOperation({
    summary: 'Login',
    description: 'This endpoint is used for logging in. supply username and pw in json body',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful response jwt and account information.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the login, Please see error.',
  })
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

  @ApiOperation({
    summary: 'Logout',
    description: 'This endpoint is used for logging out and clearing http cookie of jwt.',
  })
  @ApiResponse({
    status: 200,
    description: `A successful response with an OK from the API.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the logout, Please see error.',
  })
  @UseGuards(JwtAuthenticationGuard)
  @Post('/logout')
  async logOut(@Req() request: RequestWithUser, @Res() res: Response) {
    res.setHeader('Set-Cookie', this.authenticationService.getCookieForLogOut());
    return res.sendStatus(200);
  }

  @ApiOperation({
    summary: 'Authenticate account',
    description: 'This endpoint is used for authenticating an account by their jwt.',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful response with the account in question.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the authentication of the account, Please see error.',
  })
  @UseGuards(JwtAuthenticationGuard)
  @Get('/authenticate')
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}
