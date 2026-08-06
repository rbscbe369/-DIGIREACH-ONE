export interface IPreviewProvider {
  generateThumbnailUrl(documentId: string, versionId: string): Promise<string | null>;
  generatePreviewHtml(documentId: string, versionId: string): Promise<string | null>;
}
