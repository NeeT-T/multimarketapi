import { default as Redis, RedisKey, RedisOptions } from 'ioredis';

const redis: Redis = new Redis({
    host: process.env.REDIS_HOST || "localhst",
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASS
});

const get = async (key: RedisKey) => {
    const value = await redis.get(key);
    return value ? JSON.parse(value) : null;
}

const set = (key: RedisKey, value: Object, timeExp: number | string) => {
    redis.set(key, JSON.stringify(value), "EX", timeExp);
}

const del = (key: RedisKey) => {
    redis.del(key);
}

const foo = { bar : "value"}

export {
    get,
    set,
    del,
}
