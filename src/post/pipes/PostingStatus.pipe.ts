import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { PostingStatus } from '../posting.model';

// PipeTransform 인터페이스를 구현해줘야함
// 모든 pipe는 transform() 메서드를 필요로함
// transform() 메서드
// 1파라미터 -> 처리가 된 인자의 값(value)
// 2파라미터 -> 인자에 대한 메타 데이터를 포함한 객체
// return된 값은 route 핸들러로 전달됨
// 예외시 클라이언트에게 바로 전달
export class PostingStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [PostingStatus.PRIVATE, PostingStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value}은 게시물의 상태가 아닙니다`);
    }
    return value;
  }

  // 정해둔 status의 맞는지 검증하는 함수
  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
