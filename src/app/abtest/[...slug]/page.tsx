import AbTestPage from '@/app/components/AbTestPage/AbTestPage';
import { DTOContant } from '@/utils/DTO';
import { getData } from './getDataServer';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { cards, pageContent } = await getData({ params });

  const { data: cardDetails } = DTOContant(cards);
  const { data: pageDetails } = DTOContant(pageContent);

  return <AbTestPage cardDetails={cardDetails} pageDetail={pageDetails[0]} />;
}
