import * as express from "express";
import * as next from "next";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import dataSources from "./graphql/dataSources";

const port = parseInt(process.env.PORT!, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apolloServer: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

app.prepare().then(() => {
  const server: express.Application = express();

  apolloServer.applyMiddleware({ app: server });

  server.get("*", (req: express.Request, res: express.Response) => {
    return handle(req, res);
  });

  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`GraphQL endpoint ${apolloServer.graphqlPath}`);
  });
});
