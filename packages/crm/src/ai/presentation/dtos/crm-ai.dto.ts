import { z } from 'zod';

export const ContinueConversationDto = z.object({
  messageContent: z.string(),
});
