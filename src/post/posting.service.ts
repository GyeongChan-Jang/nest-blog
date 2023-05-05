import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { PostingStatus } from './posting.model';
import { v1 as uuid } from 'uuid';
import { CreatePostingDto } from './dto/create-posting.dto';
import { PrismaService } from 'src/prisma.service';
import { Posting } from '@prisma/client';

@Injectable()
export class PostingService {
  constructor(private prismaService: PrismaService) {}

  // 전체 조회
  async getAllPosting(): Promise<Posting[]> {
    return this.prismaService.posting.findMany();
  }

  // 특정 게시물 조회
  async getPostingById(id: number): Promise<Posting | null> {
    return this.prismaService.posting.findUnique({
      where: {
        id,
      },
    });
  }

  // Posting 생성
  async createPosting(@Body() createPostingDto: CreatePostingDto) {
    return this.prismaService.posting.create({
      data: {
        ...createPostingDto,
      },
    });
  }

  // Posting 삭제
  async deletePosting(id: number) {
    return this.prismaService.posting.delete({
      where: { id },
    });
  }

  // Posting 상태 수정
  async updatePostingStatus(id: number, status: PostingStatus) {
    return this.prismaService.posting.update({
      where: { id },
      data: {
        status,
      },
    });
  }
}
