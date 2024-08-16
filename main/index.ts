import { InvocationContext, HttpRequest } from '@azure/functions';
import { createApp } from '../src/main.azure';
import serverlessExpress from '@codegenie/serverless-express';

let cachedServer: any;

export default async function (
  context: InvocationContext,
  req: HttpRequest,
): Promise<void> {
  if (!cachedServer) {
    cachedServer = serverlessExpress({ app: await createApp() });
  }
  return cachedServer(context, req);
}
