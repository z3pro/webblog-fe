import { CategoryItem } from "./category";

export type ArticlesItem = {
  createdBy: string,
  createDate: Date,
  modifierBy: string,
  modifierDate: Date,
  id: number,
  title: string,
  content: string,
  img: string,
  slug: string,
  userLike: any,
  user: any,
  category: any,
}