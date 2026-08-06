import { PersonaModel } from '../prisma/interfaces';
import { Persona } from '../../../domain/entities/persona.entity';
import { PersonaId, OrganizationId, RoleId } from '../../../domain/value-objects/id.vo';

export class PersonaMapper {
  static toDomain(raw: PersonaModel): Persona {
    const roleIds = Array.isArray(raw.roles)
      ? raw.roles.map(
          (r: unknown) =>
            new RoleId(((r as Record<string, unknown>).roleId as string) || (r as string)),
        )
      : [];
    return new Persona(
      new PersonaId(raw.id),
      new OrganizationId(raw.organizationId),
      raw.name,
      roleIds,
    );
  }

  static toPersistence(persona: Persona): PersonaModel {
    return {
      id: persona.id.value,
      organizationId: persona.organizationId.value,
      name: persona.name,
      // In a real app, you'd map the relation to a join table format
      roles: persona.roles.map((r) => r.value),
    };
  }
}
