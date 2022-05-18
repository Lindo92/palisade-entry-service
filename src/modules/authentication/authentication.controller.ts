import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { Public } from './decorator/public.decorator';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req) {
    return this.authenticationService.login(req.account)
  }
}
