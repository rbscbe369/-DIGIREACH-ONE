import { Folder } from '../../domain/entities/folder.entity';

export interface IFolderRepository {
  save(folder: Folder): Promise<void>;
  findById(id: string): Promise<Folder | null>;
  delete(id: string): Promise<void>;
}
