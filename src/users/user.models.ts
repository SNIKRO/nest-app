import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.models';
import { UserRoles } from 'src/roles/user-roles.models';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isAdmin: boolean;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  balances: number;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
