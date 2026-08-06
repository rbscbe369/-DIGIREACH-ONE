import { IStorageProvider } from '../../application/interfaces/i-storage.provider';

export class DummyStorageProvider implements IStorageProvider {
  async upload(_path: string, _bytes: Buffer, _contentType: string): Promise<string> {
    return `dummy-url-for-${_path}`;
  }

  async download(_path: string): Promise<Buffer> {
    return Buffer.from('dummy data');
  }

  async delete(_path: string): Promise<void> {}

  async exists(_path: string): Promise<boolean> {
    return true;
  }

  async getSignedUrl(_path: string, _expirySeconds: number): Promise<string> {
    return `https://dummy-signed-url.com/${_path}`;
  }

  async copy(_sourcePath: string, _destinationPath: string): Promise<void> {}

  async move(_sourcePath: string, _destinationPath: string): Promise<void> {}
}
