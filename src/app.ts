import express from 'express';
import morgan from 'morgan'
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { router, createContext } from './trpc';

const app = express();
app.use(morgan("dev"));

const appRouter = router({

})

app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext
}))

export default app;