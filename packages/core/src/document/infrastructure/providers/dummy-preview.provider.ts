import { IPreviewProvider } from '../../application/interfaces/i-preview.provider';

export class DummyPreviewProvider implements IPreviewProvider {
  async generateThumbnailUrl(_documentId: string, _versionId: string): Promise<string | null> {
    return `https://dummy-preview.com/${_documentId}/${_versionId}/thumbnail.png`;
  }

  async generatePreviewHtml(_documentId: string, _versionId: string): Promise<string | null> {
    return `<div>Dummy preview for ${_documentId}</div>`;
  }
}
