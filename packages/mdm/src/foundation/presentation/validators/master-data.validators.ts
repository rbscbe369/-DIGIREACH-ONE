import { MasterDataHealthDto } from '../dtos/master-data.dto';
export class MasterDataValidators {
  static validateHealth(data: unknown) {
    return MasterDataHealthDto.parse(data);
  }
}
