import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { Role } from 'src/modules/account/enums/role.enum';
import RequestWithUser from '../interface/requestWithUser.interface';
import JwtAuthenticationGuard from './jwt-auth.guard';


const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin extends JwtAuthenticationGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;

      return user?.roles.includes(role);
    }
  }

  return mixin(RoleGuardMixin);
}

export default RoleGuard;