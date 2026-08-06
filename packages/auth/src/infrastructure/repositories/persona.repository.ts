import { BaseRepository } from './base.repository';
import { IPrismaClient, PersonaModel } from '../persistence/prisma/interfaces';
import { IPersonaRepository } from '../../domain/repositories/i-persona.repository';
import { Persona } from '../../domain/entities/persona.entity';
import { PersonaId, OrganizationId } from '../../domain/value-objects/id.vo';
import { PersonaMapper } from '../persistence/mappers/persona.mapper';

export class PersonaRepository
  extends BaseRepository<Persona, PersonaId>
  implements IPersonaRepository
{
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }

  async findById(id: PersonaId): Promise<Persona | null> {
    const data = await this.prisma.persona.findUnique({
      where: { id: id.value },
      include: { roles: true },
    });
    return data ? PersonaMapper.toDomain(data) : null;
  }

  async findByOrganization(orgId: OrganizationId): Promise<Persona[]> {
    const data = await this.prisma.persona.findMany({
      where: { organizationId: orgId.value },
      include: { roles: true },
    });
    return data.map((d: PersonaModel) => PersonaMapper.toDomain(d));
  }

  async save(persona: Persona): Promise<void> {
    const data = PersonaMapper.toPersistence(persona);
    // Real implementation would handle nested relations properly
    await this.prisma.persona.upsert({
      where: { id: data.id },
      update: { name: data.name },
      create: { id: data.id, organizationId: data.organizationId, name: data.name },
    });
  }
}
