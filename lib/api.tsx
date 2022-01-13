export class ApiError extends Error {
  constructor(url: string, public status: number, errMsg?: string) {
    super(errMsg ? errMsg :`'${url}' returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = 'ApiError';
  }
}

export async function fetchJson(url: string, options?: RequestInit, errMsg?: string): Promise<any> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new ApiError(url, response.status, errMsg);
  }
  return await response.json();
}