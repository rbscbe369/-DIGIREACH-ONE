import { Organization } from '../entities/organization.entity';
import { OrganizationId } from '../value-objects/id.vo';

export interface IOrganizationRepository {
  findById(id: OrganizationId): Promise<Organization | null>;
  findBySlug(slug: string): Promise<Organization | null>;
  save(organization: Organization): Promise<void>;
}
