export class RateLimiter {
    private tokens: number;
    private maxTokens: number;

    constructor(maxTokens: number) {
        this.tokens = maxTokens;
        this.maxTokens = maxTokens;
    }

    tryConsume(cost: number): boolean {
        if (this.tokens >= cost) {
            this.tokens -= cost;
            return true;
        }
        return false;
    }
}
