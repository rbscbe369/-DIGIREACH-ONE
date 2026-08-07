// Assuming Zod is used at the edge
export const dummyZodSchema = {
  // representation of external validation
  validate: (input: unknown) => {
    const data = input as Record<string, unknown>;
    if (typeof data.productVersionId !== 'string') throw new Error('Invalid productVersionId');
    if (typeof data.priceBookId !== 'string') throw new Error('Invalid priceBookId');
    if (typeof data.quantity !== 'number') throw new Error('Invalid quantity');
    if (typeof data.basePrice !== 'number') throw new Error('Invalid basePrice');
    if (typeof data.currency !== 'string') throw new Error('Invalid currency');
    return input;
  }
};
