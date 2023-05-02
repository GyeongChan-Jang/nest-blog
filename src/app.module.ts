import { Module } from '@nestjs/common';
import { PostingModule } from './post/posting.module';

@Module({
  imports: [PostingModule],
})
export class AppModule {}
