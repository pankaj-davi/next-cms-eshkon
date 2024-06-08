import { getContentData } from '@/utils/contentful';

export const getData = async ({
  params: { slug },
}: {
  params: { slug: string[] };
}) => {
  // Fetch pages entries and cards entriess
  const pages = await getContentData('pages');
  const pageContent = await getContentData('pages', slug.join('/'));

  const cards = await getContentData('cards');

  return { cards, pageContent };
};
