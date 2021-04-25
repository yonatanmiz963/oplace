// TODO: Add Price

export interface place {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  createdAt: Date | number;
  comments: Array<object>;
  location: Object;
}
