export class ProductAsset {
  constructor(
    public readonly assetId: string,
    public readonly type:
      | 'IMAGE'
      | 'VIDEO'
      | 'MANUAL'
      | 'WARRANTY'
      | 'CERTIFICATE'
      | 'DATASHEET'
      | 'SAFETY_SHEET'
      | 'CAD_DRAWING'
      | 'INSTALLATION_GUIDE'
      | 'TECHNICAL_SPECIFICATION',
    public readonly documentEngineReferenceId: string,
    public readonly thumbnail: string | null,
    public readonly preview: string | null,
    public readonly original: string | null,
    public readonly optimized: string | null,
    public readonly mimeType: string,
    public readonly language: string | null,
    public readonly resolution: string | null,
  ) {}
}
