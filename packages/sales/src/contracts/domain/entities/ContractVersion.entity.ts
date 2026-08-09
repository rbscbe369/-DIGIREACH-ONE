import { ContractTerm } from '../value-objects/ContractTerm.vo';
import { RenewalPolicy } from '../value-objects/RenewalPolicy.vo';
import { ContractLine } from './ContractLine.entity';

export class ContractVersion {
  constructor(
    public readonly contractId: string,
    public readonly version: number,
    public readonly term: ContractTerm,
    public readonly renewalPolicy: RenewalPolicy,
    public readonly lines: ContractLine[],
    public readonly slas: string[],
    public readonly originatingOrderId: string | null,
    public readonly originatingQuoteId: string | null,
    public readonly createdAt: Date,
  ) {}
}
