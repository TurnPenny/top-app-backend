import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModelInterface extends Base {}

export class AuthModel extends TimeStamps {
  _id: string;
  @prop({
    unique: true,
  })
  email: string;
  @prop()
  passwordHash: string;
}
