import { DocumentLifecycle } from '../value-objects/document-lifecycle.vo';

export class DocumentLifecyclePolicy {
  static canTransition(current: DocumentLifecycle, next: DocumentLifecycle): boolean {
    const transitions: Record<DocumentLifecycle, DocumentLifecycle[]> = {
      [DocumentLifecycle.UPLOADING]: [DocumentLifecycle.PROCESSING, DocumentLifecycle.DELETED],
      [DocumentLifecycle.PROCESSING]: [DocumentLifecycle.READY, DocumentLifecycle.DELETED],
      [DocumentLifecycle.READY]: [
        DocumentLifecycle.LOCKED,
        DocumentLifecycle.ARCHIVED,
        DocumentLifecycle.DELETED,
      ],
      [DocumentLifecycle.LOCKED]: [DocumentLifecycle.READY], // Unlock
      [DocumentLifecycle.ARCHIVED]: [DocumentLifecycle.READY, DocumentLifecycle.DELETED],
      [DocumentLifecycle.DELETED]: [], // Terminal
    };

    return transitions[current].includes(next);
  }
}
