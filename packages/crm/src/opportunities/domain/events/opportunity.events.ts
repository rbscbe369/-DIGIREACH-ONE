export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class OpportunityCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityCreatedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityUpdatedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityAssignedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityAssignedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly assigneeId: string,
  ) {}
}

export class OpportunityStageChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityStageChangedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly newStage: string,
  ) {}
}

export class OpportunityProbabilityChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityProbabilityChangedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly newProbability: number,
  ) {}
}

export class OpportunityForecastChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityForecastChangedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly newForecast: string,
  ) {}
}

export class OpportunityWonEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityWonEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityLostEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityLostEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityCancelledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityCancelledEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityReopenedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityReopenedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityArchivedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityArchivedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityDeletedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityCompetitorAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityCompetitorAddedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly competitorName: string,
  ) {}
}

export class OpportunityStakeholderAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityStakeholderAddedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly contactId: string,
  ) {}
}

import { OutboxMessage, OutboxMessageStatus } from '@digireach-one/core';
import { Opportunity } from '../entities/opportunity.entity';
import { IIdGenerator } from '@digireach-one/shared-kernel';

export class OpportunityIntegrationEvents {
  static createEvent(
    type: string,
    opportunity: Opportunity,
    idGenerator: IIdGenerator,
    payloadOverrides: Record<string, unknown> = {},
    correlationId?: string,
    causationId?: string,
  ): OutboxMessage {
    const payload = {
      schemaVersion: '1.0',
      opportunityId: opportunity.id,
      tenantId: opportunity.tenantId,
      organizationId: null, // Implicit in CRM Account relationship
      stage: opportunity.stage.value,
      status: opportunity.status.value,
      probability: opportunity.probability.probabilityPercentage,
      forecast: opportunity.forecast.forecastCategory,
      expectedCloseDate: opportunity.forecast.expectedCloseDate
        ? opportunity.forecast.expectedCloseDate.toISOString()
        : null,
      currency: opportunity.currency.currencyCode,
      revenueAmountMinorUnits: opportunity.revenue.estimatedRevenue,
      occurredAt: new Date().toISOString(),
      createdAt: opportunity.lifecycle.createdAt.toISOString(),
      closedAt:
        opportunity.stage.value === 'CLOSED_WON' || opportunity.stage.value === 'CLOSED_LOST'
          ? opportunity.stage.enteredAt.toISOString()
          : null,
      ...payloadOverrides,
    };

    return new OutboxMessage(
      idGenerator.generate(),
      idGenerator.generate(),
      type,
      opportunity.id,
      'Opportunity',
      JSON.stringify(payload),
      null,
      correlationId || null,
      causationId || null,
      opportunity.tenantId,
      new Date(),
      new Date(),
      OutboxMessageStatus.Pending,
      0,
      null,
      null,
      null,
    );
  }

  static opportunityCreated(opportunity: Opportunity, idGenerator: IIdGenerator) {
    return this.createEvent('OpportunityCreated', opportunity, idGenerator);
  }

  static opportunityStageChanged(opportunity: Opportunity, idGenerator: IIdGenerator) {
    return this.createEvent('OpportunityStageChanged', opportunity, idGenerator);
  }

  static opportunityWon(opportunity: Opportunity, idGenerator: IIdGenerator) {
    return this.createEvent('OpportunityWon', opportunity, idGenerator);
  }

  static opportunityLost(opportunity: Opportunity, idGenerator: IIdGenerator) {
    return this.createEvent('OpportunityLost', opportunity, idGenerator);
  }
}
