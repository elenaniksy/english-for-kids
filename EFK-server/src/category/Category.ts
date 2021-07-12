import { Item } from '../item/Item';

export interface Category {
  id: number;
  category: string;
  items: Item[];
}
