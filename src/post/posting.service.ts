import { Injectable, NotFoundException } from '@nestjs/common';
import { Posting, PostingStatus } from './posting.model';
import { v1 as uuid } from 'uuid';
import { CreatePostingDto } from './dto/create-posting.dto';
@Injectable()
export class PostingService {
  // 다른 컴포넌트에서 접근하지 못하도록 private으로 선언
  private Postings: Posting[] = [];

  getAllPost(): Posting[] {
    return this.Postings;
  }

  createPost(createPostingDto: CreatePostingDto) {
    const posting: Posting = {
      id: uuid(),
      ...createPostingDto,
      createdAt: new Date(),
    };

    this.Postings.push(posting);
  }

  getPostingById(id: string): Posting {
    const found = this.Postings.find((post) => post.id === id);
    if (!found) {
      throw new NotFoundException(
        `${id} 아이디를 가진 게시글을 찾을 수 없습니다.`,
      );
    }

    return found;
  }

  deletePosting(id: string): void {
    const found = this.getPostingById(id);
    if (!found) {
      throw new NotFoundException(`${id}를 가진 게시물이 존재하지 않습니다.`);
    }
  }

  updatePostingStats(id: string, status: PostingStatus): Posting {
    const post = this.getPostingById(id);
    post.status = status;
    return post;
  }
}
