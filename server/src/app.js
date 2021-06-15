import '@db';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import schema from '@graphql/schema';
import resolvers from '@graphql/resolvers';
import auths from '@middleware/auth'
import Ratelimiter from '@utils/RateLimit'

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
    playground: true,
    context: ({ req, res }) => ({ req, res }),
});

const app = express();
app.use(Ratelimiter)
app.use(cors())
app.use(auths)
app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true,
    })
);

server.applyMiddleware({ app, cors: false, path: '/graphql' });

export default app;
