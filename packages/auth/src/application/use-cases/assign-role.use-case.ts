import { AssignRoleCommand } from '../commands/assign-role.command';
import { IPersonaRepository } from '../../domain/repositories/i-persona.repository';
import { IRoleRepository } from '../../domain/repositories/i-role.repository';
import { PersonaId, RoleId } from '../../domain/value-objects/id.vo';

export class AssignRoleUseCase {
  constructor(
    private readonly personaRepository: IPersonaRepository,
    private readonly roleRepository: IRoleRepository,
  ) {}

  async execute(command: AssignRoleCommand): Promise<void> {
    const persona = await this.personaRepository.findById(new PersonaId(command.personaId));
    if (!persona) throw new Error('Persona not found');

    const role = await this.roleRepository.findById(new RoleId(command.roleId));
    if (!role) throw new Error('Role not found');

    persona.assignRole(role.id);
    await this.personaRepository.save(persona);
  }
}
