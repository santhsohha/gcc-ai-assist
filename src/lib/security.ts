// Security utilities for input sanitization and rate limiting

const rateLimitStore = new Map<string, { count: number; lastReset: number }>();

/**
 * Sanitizes input strings to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Client-side rate limiting for form submissions
 */
export function checkRateLimit(identifier: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);
  
  if (!record || now - record.lastReset > windowMs) {
    rateLimitStore.set(identifier, { count: 1, lastReset: now });
    return true;
  }
  
  if (record.count >= maxAttempts) {
    return false;
  }
  
  record.count++;
  return true;
}

/**
 * Generates a simple identifier for rate limiting
 */
export function getRateLimitIdentifier(): string {
  // Use a combination of user agent and timestamp for basic identification
  return btoa(navigator.userAgent.slice(0, 50) + Date.now().toString()).slice(0, 20);
}