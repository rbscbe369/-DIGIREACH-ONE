export class ProductLifecycle {
  constructor(
    public readonly state:
      | 'DRAFT'
      | 'PENDING_REVIEW'
      | 'APPROVED'
      | 'PUBLISHED'
      | 'DEPRECATED'
      | 'RETIRED'
      | 'ARCHIVED'
      | 'OBSOLETE',
  ) {}
}
