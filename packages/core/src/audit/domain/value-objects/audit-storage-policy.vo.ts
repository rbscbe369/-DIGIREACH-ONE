export enum AuditStoragePolicy {
  HOT = 'HOT', // Fast storage, immediately accessible
  WARM = 'WARM', // Slower storage, indexed
  COLD = 'COLD', // Cold storage, bulk access only
  ARCHIVE = 'ARCHIVE', // Deep archive, requires retrieval process
}
