import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';
export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageAdvantages {
  title: string;
  description: string;
}

export interface TopPageModelInterface extends Base {}

export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;
  @prop()
  secondCategory: string;
  @prop()
  title: string;
  @prop({ unique: true })
  alias: string;
  @prop()
  category: string;
  @prop({ type: () => [TopPageAdvantages] })
  advantages: TopPageAdvantages[];
  @prop()
  seoText: string;
  @prop({ type: () => [String] })
  tags: string[];
  @prop()
  tagsTtitle: string;
}
