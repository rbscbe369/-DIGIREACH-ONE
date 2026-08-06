export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata: {
    timestamp: string;
    version: string;
  };
  traceId: string;
}

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details: unknown[];
  };
  traceId: string;
}

export class ResponseHelper {
  static success<T>(data: T, traceId: string = ''): SuccessResponse<T> {
    return {
      success: true,
      data,
      metadata: {
        timestamp: new Date().toISOString(),
        version: 'v1',
      },
      traceId,
    };
  }

  static error(
    code: string,
    message: string,
    details: unknown[] = [],
    traceId: string = '',
  ): ErrorResponse {
    return {
      success: false,
      error: {
        code,
        message,
        details,
      },
      traceId,
    };
  }
}
