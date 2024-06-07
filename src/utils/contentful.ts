import { createClient, Entry } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  environment: 'eskhkonLocal' as string,
});

interface GetContant {}

export const getContantData = async (
  entryName: string
): Promise<Entry<any>[]> => {
  const response = await client.getEntries({
    content_type: entryName,
  });
  return response.items;
};
