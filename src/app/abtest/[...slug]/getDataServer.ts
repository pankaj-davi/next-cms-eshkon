import { getContantData } from '@/utils/contentful';

export const getData = async ({
  params: { slug },
}: {
  params: { slug: string[] };
}) => {
  // Fetch pages entries and cards entriess
  const pages = await getContantData('pages');
  const pageContent = pages.filter(
    ({ fields }: any) => fields.slug === slug[0]
  );

  const cards = await getContantData('cards');

  return { cards, pageContent };
};
