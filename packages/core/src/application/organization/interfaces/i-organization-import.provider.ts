export interface OrganizationImportProvider {
  importFromCsv(payload: Buffer): Promise<void>;
}

export interface OrganizationExportProvider {
  exportToCsv(organizationId: string): Promise<Buffer>;
}
