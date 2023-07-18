import { Client, cacheExchange, fetchExchange } from 'urql';

export const urqlClient = new Client({
  url: 'https://strapi-app-sm13.onrender.com/graphql',
  exchanges: [cacheExchange, fetchExchange],
});
