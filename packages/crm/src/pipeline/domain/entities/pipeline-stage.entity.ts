import { PipelineSLA } from '../value-objects/pipeline-sla.vo';

export class PipelineStage {
  constructor(
    public readonly id: string,
    public readonly stageName: string,
    public readonly stageCode: string,
    public readonly displayOrder: number,
    public readonly color: string | null,
    public readonly icon: string | null,
    public readonly probability: number,
    public readonly sla: PipelineSLA,
    public readonly entryCriteria: string[],
    public readonly exitCriteria: string[],
  ) {}
}
