import { IsNotEmpty } from 'class-validator';
import { PostingStatus } from '../posting.model';

export class CreatePostingDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
  image: string;
  @IsNotEmpty()
  status: PostingStatus;
}
