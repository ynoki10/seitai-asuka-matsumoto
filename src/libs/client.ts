import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'asuka-matsumoto',
  apiKey: process.env.API_KEY || '',
});
