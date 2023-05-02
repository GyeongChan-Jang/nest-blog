import { Injectable } from '@nestjs/common';
import { Posting } from './posting.model';
import { v1 as uuid } from 'uuid';
@Injectable()
export class PostingService {
  // 다른 컴포넌트에서 접근하지 못하도록 private으로 선언
  private Postings: Posting[] = [];

  getAllPost(): Posting[] {
    return this.Postings;
  }

  createPost(title, content, image, status) {
    const posting: Posting = {
      id: uuid(),
      title,
      content,
      image,
      status,
      createdAt: new Date(),
    };

    this.Postings.push(posting);
  }
}
