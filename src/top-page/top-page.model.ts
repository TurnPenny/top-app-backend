export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  firstLevelCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  advantages: { title: string; description: string }[];
  seoText: string;
  tags: string[];
  tagsTtitle: string;
  hh?: {
    count: number;
    juniorSalary: number;
    midSalary: number;
    seniorSalary: number;
  };
}
