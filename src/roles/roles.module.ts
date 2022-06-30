import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.models';
import { RolesController } from './roles.controller';
import { Role } from './roles.models';
import { RolesService } from './roles.service';
import { UserRoles } from './user-roles.models';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
