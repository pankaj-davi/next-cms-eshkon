import { createClient, Entry } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  environment: 'eskhkonLocal' as string,
});

interface GetContant {}

const getContantData = async (): Promise<Entry<any>[]> => {
  const response = await client.getEntries();
  return response.items;
};

export default getContantData;
