import { getContentData } from '@/utils/contentful';

export const getData = ({
  params: { slug },
}: {
  params: { slug: string[] };
}) => {
  // getting contant from contantful pages details
  const pageContentPromise = getContentData('pages', slug.join('/'));
  const cardsPromise = getContentData('cards');

  return Promise.all([pageContentPromise, cardsPromise]).then(
    ([pageContent, cards]) => {
      return { cards, pageContent };
    }
  );
};
