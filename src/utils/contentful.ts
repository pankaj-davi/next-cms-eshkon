import { createClient, Entry } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  environment: 'eskhkonLocal' as string,
});

interface GetContant {}

export const getContentData = async (
  entryName: string,
  slug?: string
): Promise<Entry<any>[]> => {
  const query: any = {
    content_type: entryName,
  };

  if (slug) {
    query['fields.slug'] = slug;
  }

  const response = await client.getEntries(query);
  return response.items;
};
