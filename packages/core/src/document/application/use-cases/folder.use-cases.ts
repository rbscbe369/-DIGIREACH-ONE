import { IFolderRepository } from '../interfaces/i-folder.repository';
import { AccessEvaluator } from '../services/access.evaluator';
import { Folder } from '../../domain/entities/folder.entity';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { FolderMovedEvent } from '../../domain/events/document.events';

export class CreateFolderUseCase {
  constructor(
    private readonly repo: IFolderRepository,
    private readonly accessEvaluator: AccessEvaluator,
  ) {}

  async execute(folder: Folder, context: ExecutionContext): Promise<void> {
    if (!this.accessEvaluator.canAccess(folder.accessPolicy, context)) {
      throw new Error('Access Denied');
    }
    await this.repo.save(folder);
  }
}

export class MoveFolderUseCase {
  constructor(
    private readonly repo: IFolderRepository,
    private readonly accessEvaluator: AccessEvaluator,
  ) {}

  async execute(
    folderId: string,
    newParentId: string | null,
    context: ExecutionContext,
  ): Promise<void> {
    const folder = await this.repo.findById(folderId);
    if (!folder) throw new Error('Folder not found');
    if (!this.accessEvaluator.canAccess(folder.accessPolicy, context)) {
      throw new Error('Access Denied');
    }

    const updated = new Folder(
      folder.id,
      folder.name,
      newParentId,
      folder.metadata,
      folder.accessPolicy,
      folder.ownerId,
    );

    await this.repo.save(updated);
    new FolderMovedEvent(folder.id, newParentId || '');
  }
}
