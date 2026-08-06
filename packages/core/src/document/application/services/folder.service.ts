import { CreateFolderUseCase, MoveFolderUseCase } from '../use-cases/folder.use-cases';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { Folder } from '../../domain/entities/folder.entity';

export class FolderService {
  constructor(
    private readonly createUseCase: CreateFolderUseCase,
    private readonly moveUseCase: MoveFolderUseCase,
  ) {}

  async create(folder: Folder, context: ExecutionContext): Promise<void> {
    await this.createUseCase.execute(folder, context);
  }

  async move(
    folderId: string,
    newParentId: string | null,
    context: ExecutionContext,
  ): Promise<void> {
    await this.moveUseCase.execute(folderId, newParentId, context);
  }
}
