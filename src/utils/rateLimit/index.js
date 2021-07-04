import config from '../../config'
import  rateLimit from'express-rate-limit';
import RedisStore from 'rate-limit-redis';


const Ratelimiter = new rateLimit ({
    store: new RedisStore({ client: config.redis_url }),
    max: 30,
    delayMs: 0,
});

export default Ratelimiter