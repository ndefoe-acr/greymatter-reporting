import { describe, it, expect, beforeEach } from 'vitest';
import { RateLimiter } from '../src/worker/rateLimiter';

describe('RateLimiter', () => {
    let limiter: RateLimiter;

    beforeEach(() => {
        limiter = new RateLimiter(5000); // 5000 tokens per hour
    });

    it('should allow request if tokens available', () => {
        expect(limiter.tryConsume(100)).toBe(true);
    });

    it('should deny request if not enough tokens', () => {
        limiter.tryConsume(5000);
        expect(limiter.tryConsume(1)).toBe(false);
    });
});
