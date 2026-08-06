import { Persona } from '../entities/persona.entity';
import { PersonaId, OrganizationId } from '../value-objects/id.vo';

export interface IPersonaRepository {
  findById(id: PersonaId): Promise<Persona | null>;
  findByOrganization(organizationId: OrganizationId): Promise<Persona[]>;
  save(persona: Persona): Promise<void>;
}
