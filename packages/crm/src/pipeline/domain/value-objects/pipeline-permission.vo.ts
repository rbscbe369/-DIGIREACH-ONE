export class PipelinePermission {
  constructor(
    public readonly roleIds: string[],
    public readonly userIds: string[],
  ) {}
}
