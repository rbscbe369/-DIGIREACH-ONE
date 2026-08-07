import { PricingRuleEvaluator } from '../../application/services/PricingRuleEvaluator';
import { PricingEvaluationRequestDto } from '../dtos/PricingEvaluationRequestDto';
import { PricingContext } from '../../domain/value-objects/PricingContext.vo';
import { dummyZodSchema } from '../validators/pricing.validators';

export class PricingController {
  constructor(private readonly evaluator: PricingRuleEvaluator) {}

  public async evaluate(request: PricingEvaluationRequestDto): Promise<unknown> {
    const valid = dummyZodSchema.validate(request) as PricingEvaluationRequestDto;
    
    // Boundary mapped to Immutable Value Object
    const context = new PricingContext(
      valid.tenantId || null,
      valid.organizationId || null,
      valid.productVersionId,
      valid.priceBookId,
      valid.priceBookEntryId || null,
      valid.quantity,
      valid.basePrice,
      valid.currency,
      valid.channel || null,
      valid.region || null,
      valid.customerReference || null,
      new Date()
    );

    const result = await this.evaluator.evaluate(context);

    // Map back to response DTO
    return {
      basePrice: result.basePrice,
      finalCalculatedPrice: result.finalCalculatedPrice,
      adjustmentsApplied: result.adjustmentsApplied,
      currency: result.currency,
      trace: result.evaluationTrace
    };
  }
}
