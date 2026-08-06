import { z } from 'zod';

export const EvaluateRuleSetDto = z.object({
  ruleSetId: z.string(),
  versionId: z.string(),
});
