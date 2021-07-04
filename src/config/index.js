import { config } from 'dotenv';
config();

export default {
    url: process.env.APP_URL || `http://localhost:4000/api/v1`,
    port: process.env.PORT || 9000,
    environment: process.env.NODE_ENV || 'development',

    databaseUrl: {
        development: process.env.DEVELOPMENT_DATABASE_URL || 'mongodb://localhost:27017/anyfin',
        production: process.env.PRODUCTION_DATABASE_URL || 'mongodb://localhost:27017/anyfin',
        test: process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/dobook-test',
        staging: process.env.STAGING_DATABASE_URL || 'mongodb://localhost:27017/anyfin_stagin',
    },
    jwtSecret: process.env.JWT_SECRET || 'this_is_my_superSecrete',
    development: process.env.NODE_ENV === 'development',
    production: process.env.NODE_ENV === 'production',
    test: process.env.NODE_ENV === 'test',
    staging: process.env.NODE_ENV === 'staging',
    redis_url: process.env.REDIS_URI || 'redis://127.0.0.1:6379',
    fixer_key: process.env.FIXER_ACCESS_KEY || 'API_KEY',
    country_url: process.env.COUNTRY_URL || 'https://restcountries.eu/rest/v2/name',
};
