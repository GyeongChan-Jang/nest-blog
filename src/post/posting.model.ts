export interface Posting {
  id: string;
  title: string;
  content: string;
  image?: any;
  status: PostingStatus;
  createdAt: Date;
  updatedAt?: Date;
}

export enum PostingStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
