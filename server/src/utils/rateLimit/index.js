import config from '@config'
const RateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

const Ratelimiter = new RateLimit({
    store: new RedisStore({ client: config.redis_url }),
    max: 30,
    delayMs: 0,
});

export default Ratelimiter