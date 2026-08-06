export class FileChecksum {
  constructor(
    public readonly algorithm: 'MD5' | 'SHA1' | 'SHA256',
    public readonly hash: string,
  ) {}
}
