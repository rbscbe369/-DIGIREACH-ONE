import { Entity } from './entity';
import { DeviceId, UserId } from '../value-objects/id.vo';

export class Device extends Entity<DeviceId> {
  private _isTrusted: boolean;

  constructor(
    id: DeviceId,
    public readonly userId: UserId,
    public readonly fingerprint: string,
    isTrusted: boolean = false,
  ) {
    super(id);
    this._isTrusted = isTrusted;
  }

  get isTrusted(): boolean {
    return this._isTrusted;
  }

  public revokeTrust(): void {
    this._isTrusted = false;
  }

  public grantTrust(): void {
    this._isTrusted = true;
  }
}
