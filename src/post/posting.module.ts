import { Module } from '@nestjs/common';
import { PostingController } from './posting.controller';
import { PostingService } from './posting.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PostingController],
  providers: [PostingService, PrismaService],
})
export class PostingModule {}
