import AbTestPage from '@/app/components/AbTestPage/AbTestPage';
import { DTOContant } from '@/utils/DTO';
import { getContantData } from '@/utils/contentful';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { cards, pageContent } = await getData({ params });

  const { data: cardDetails } = DTOContant(cards);
  const { data: pageDetails } = DTOContant(pageContent);

  return <AbTestPage cardDetails={cardDetails} pageDetail={pageDetails[0]} />;
}

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
