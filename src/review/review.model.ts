import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
export interface reviewModelInterface extends Base {}

export class ReviewModel extends TimeStamps {
  @prop()
  _id: string;
  @prop()
  name: string;
  @prop()
  title: string;
  @prop()
  description: string;
  @prop()
  rating: number;
  @prop()
  createdData: Date;
}
