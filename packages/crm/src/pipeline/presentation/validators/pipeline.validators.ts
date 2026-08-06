import { CreatePipelineDto } from '../dtos/pipeline.dto';

export class PipelineValidators {
  static validateCreate(data: unknown) {
    return CreatePipelineDto.parse(data);
  }
}
