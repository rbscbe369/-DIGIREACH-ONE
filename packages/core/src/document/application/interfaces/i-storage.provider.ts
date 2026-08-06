export interface IStorageProvider {
  upload(path: string, bytes: Buffer, contentType: string): Promise<string>;
  download(path: string): Promise<Buffer>;
  delete(path: string): Promise<void>;
  exists(path: string): Promise<boolean>;
  getSignedUrl(path: string, expirySeconds: number): Promise<string>;
  copy(sourcePath: string, destinationPath: string): Promise<void>;
  move(sourcePath: string, destinationPath: string): Promise<void>;
}
