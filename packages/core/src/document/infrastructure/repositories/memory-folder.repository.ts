import { IFolderRepository } from '../../application/interfaces/i-folder.repository';
import { Folder } from '../../domain/entities/folder.entity';

export class MemoryFolderRepository implements IFolderRepository {
  private folders = new Map<string, Folder>();

  async save(folder: Folder): Promise<void> {
    this.folders.set(folder.id, folder);
  }

  async findById(id: string): Promise<Folder | null> {
    return this.folders.get(id) || null;
  }

  async delete(id: string): Promise<void> {
    this.folders.delete(id);
  }
}
