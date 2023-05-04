import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostingService } from './posting.service';
import { Posting, PostingStatus } from './posting.model';
import { CreatePostingDto } from './dto/create-posting.dto';
import { PostingStatusValidationPipe } from './pipes/PostingStatus.pipe';

@Controller('posting')
export class PostingController {
  // postService: PostService -> 원래는 이렇게 선언해야 하지만 private과 같은 접근제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로터티로 선언됨
  constructor(private postingService: PostingService) {
    this.postingService = postingService;
  }
  @Get()
  getPost(): Posting[] {
    return this.postingService.getAllPost();
  }

  @Get('/:id')
  getPostingById(@Param('id', ParseIntPipe) id: string): Posting {
    return this.postingService.getPostingById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostingDto: CreatePostingDto) {
    return this.postingService.createPost(createPostingDto);
  }

  @Delete('/:id')
  deletePost(@Param('id', ParseIntPipe) id: string): void {
    return this.postingService.deletePosting(id);
  }

  @Patch('/:id/status')
  updatePostStatus(
    @Param('id', ParseIntPipe) id: string,
    @Body('status', PostingStatusValidationPipe) status: PostingStatus,
  ) {
    return this.postingService.updatePostingStats(id, status);
  }
}
