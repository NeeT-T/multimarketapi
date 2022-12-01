const Redis = require('ioredis');

class cache {
    redis: any;

    constructor() {
        this.redis = new Redis({
            "host": process.env.REDIS_HOST || "localhost",
            "port": process.env.REDIS_PORT || 6379,
            "password": process.env.REDIS_PASS
        })
    }

    async get(key: any) {
        const value = await this.redis.get(key);
        return value ? JSON.parse(value) : null;
    }

    set(key: any, value: any, timeExp: any) {
        this.redis.set(key, JSON.stringify(value), "EX", timeExp);
    }

    del(key: any) {
        this.redis.del(key);
    }
}

export default new cache();
