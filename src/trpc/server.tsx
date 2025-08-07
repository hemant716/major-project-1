import 'server-only'; // <-- ensure this file cannot be imported from the client
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import { createTRPCContext } from './init';
import  makeQueryClient  from './routers/query-client';
import { appRouter } from './routers/_app';
//import { httpLink } from '@trpc/client/links';
import { createTRPCClient as createClient, TRPCClient } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';
// IMPORTANT: Create a stable getter for the query client that
//            will return the same client during the same request.
export const getQueryClient = cache(makeQueryClient);
export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});

export const caller = appRouter.createCaller(createTRPCContext)
/*
// If your router is on a separate server, pass a client:
function createTRPCClient(opts: { links: any[] }): TRPCClient<AnyRouter> {
    return createClient<AnyRouter>({
        links: opts.links,
    });
}

function createTRPCClient(arg0: { links: any[]; }): import("@trpc/client").TRPCUntypedClient<import("@trpc/server").AnyRouter> | import("@trpc/client").TRPCClient<import("@trpc/server").AnyRouter> {
    throw new Error('Function not implemented.');
}*/
