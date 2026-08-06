import { FileChecksum } from '../value-objects/file-checksum.vo';
import { ContentType } from '../value-objects/content-type.vo';

export class File {
  constructor(
    public readonly fileId: string,
    public readonly storageProvider: string,
    public readonly storagePath: string,
    public readonly sizeBytes: number,
    public readonly contentType: ContentType,
    public readonly checksum: FileChecksum,
    public readonly uploadDate: Date,
  ) {}
}
