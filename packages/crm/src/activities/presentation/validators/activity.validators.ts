import { CreateActivityDto } from '../dtos/activity.dto';

export class ActivityValidators {
  static validateCreate(data: unknown) {
    return CreateActivityDto.parse(data);
  }
}
