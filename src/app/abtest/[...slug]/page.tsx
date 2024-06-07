import AbTestPage from '@/app/components/AbTestPage/AbTestPage';
import { DTOContant } from '@/utils/DTO';
import { getContantData } from '@/utils/contentful';

export default async function Page({ params }: any) {
  const { data: cardDetails } = DTOContant(await getData());
  return (
    <>
      <h3>AB Testing Card using Statsig</h3>
      <AbTestPage cardDetails={cardDetails} />
    </>
  );
}

export const getData = async () => await getContantData('cards');
