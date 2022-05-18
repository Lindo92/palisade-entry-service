import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { AccountModule } from '../account/account.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { PalisadeConfigModule } from 'src/config/palisade-config.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './consts/jwt-constant';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Module({
  imports: [AccountModule, PassportModule, PalisadeConfigModule, JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: { expiresIn: '3600s' },
  }),],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, LocalStrategy, JwtStrategy, , { provide: 'AUTHENTICATION_GUARD', useClass: JwtAuthGuard }]
})
export class AuthenticationModule { }
