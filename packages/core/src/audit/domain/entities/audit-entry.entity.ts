import { AuditEvent } from '../value-objects/audit-event.vo';
import { AuditContext } from '../value-objects/audit-context.vo';
import { AuditActor } from '../value-objects/audit-actor.vo';
import { AuditTarget } from '../value-objects/audit-target.vo';
import { AuditCategory } from '../value-objects/audit-category.vo';
import { AuditSeverity } from '../value-objects/audit-severity.vo';
import { ComplianceMetadata } from '../value-objects/compliance-metadata.vo';
import { AuditStoragePolicy } from '../value-objects/audit-storage-policy.vo';

export class AuditEntry {
  constructor(
    public readonly id: string,
    public readonly timestamp: Date,
    public readonly event: AuditEvent,
    public readonly context: AuditContext,
    public readonly actor: AuditActor,
    public readonly target: AuditTarget,
    public readonly category: AuditCategory,
    public readonly severity: AuditSeverity,
    public readonly compliance: ComplianceMetadata,
    public readonly storagePolicy: AuditStoragePolicy,

    // Future Cryptographic integrity fields (Reserved)
    public readonly hash: string | null = null,
    public readonly previousHash: string | null = null,
    public readonly signature: string | null = null,
    public readonly integrityStatus: 'PENDING' | 'VERIFIED' | 'COMPROMISED' = 'PENDING',
  ) {}
}
