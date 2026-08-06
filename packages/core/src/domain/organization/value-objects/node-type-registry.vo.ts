export class OrganizationNodeTypeRegistry {
  private static readonly TYPES = new Set([
    'Legal Entity',
    'Business Group',
    'Company',
    'Business Unit',
    'Division',
    'Region',
    'Territory',
    'Zone',
    'Branch',
    'Campus',
    'Site',
    'Warehouse',
    'Store',
    'Factory',
    'Plant',
    'Project',
    'Department',
    'Team',
    'Cost Center',
    'Profit Center',
  ]);

  static isValidType(type: string): boolean {
    return this.TYPES.has(type);
  }
}
