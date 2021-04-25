// TODO: Add Price

export interface Place {
  _id?: string;
  title: string;
  description: string;
  imgUrl: string;
  createdAt: any;
  comments: Array<object>;
  location: Object;
}
