import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostingService } from './posting.service';
import { Posting } from './posting.model';

@Controller('posting')
export class PostingController {
  // postService: PostService -> 원래는 이렇게 선언해야 하지만 private과 괕은 접근제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로터티로 선언됨
  constructor(private postingService: PostingService) {
    this.postingService = postingService;
  }
  @Get()
  getPost(): Posting[] {
    return this.postingService.getAllPost();
  }

  @Post()
  createPost(@Body() body) {
    console.log(body);
    // return this.postingService.createPost(body);
  }
}
