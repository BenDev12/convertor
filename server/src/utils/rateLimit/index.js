import config from '@config'
import  RateLimit from'express-rate-limit';
import RedisStore from 'rate-limit-redis';


const Ratelimiter = new RateLimit({
    store: new RedisStore({ client: config.redis_url }),
    max: 30,
    delayMs: 0,
});

export default Ratelimiter