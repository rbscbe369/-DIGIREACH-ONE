import { BusinessContext } from '../../../domain/context/entities/business-context.entity';
import { WorkspaceResolver } from '../services/workspace.resolver';
import { WorkspaceAssembler } from '../services/workspace.assembler';

export class ResolveWorkspaceUseCase {
  constructor(
    private readonly resolver: WorkspaceResolver,
    private readonly assembler: WorkspaceAssembler,
  ) {}

  async execute(context: BusinessContext) {
    const baseProfile = await this.resolver.resolve(context);
    const finalProfile = this.assembler.assemble(baseProfile, context);
    return finalProfile;
  }
}
