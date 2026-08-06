import { z } from 'zod';

export const CreateOpportunityDto = z.object({
  opportunityName: z.string(),
  stage: z.enum([
    'PROSPECTING',
    'QUALIFICATION',
    'NEEDS_ANALYSIS',
    'VALUE_PROPOSITION',
    'PROPOSAL',
    'NEGOTIATION',
    'VERBAL_COMMIT',
    'CONTRACT_REVIEW',
    'CLOSED_WON',
    'CLOSED_LOST',
    'CANCELLED',
  ]),
  estimatedRevenue: z.number().min(0),
});
