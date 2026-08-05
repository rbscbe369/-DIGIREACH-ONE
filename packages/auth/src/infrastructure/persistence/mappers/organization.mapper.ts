import { OrganizationModel } from '../prisma/interfaces';
import { Organization, OrganizationStatus } from '../../../domain/entities/organization.entity';
import { OrganizationId } from '../../../domain/value-objects/id.vo';

export class OrganizationMapper {
  static toDomain(raw: OrganizationModel): Organization {
    return new Organization(
      new OrganizationId(raw.id),
      raw.name,
      raw.slug,
      raw.status as OrganizationStatus
    );
  }

  static toPersistence(org: Organization): OrganizationModel {
    return {
      id: org.id.value,
      name: org.name,
      slug: org.slug,
      status: org.status
    };
  }
}