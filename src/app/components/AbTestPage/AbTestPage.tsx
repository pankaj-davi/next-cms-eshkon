'use client';

import Card from '../Card/Card';
import useStatsig from '@/hooks/useStatsig';

const AbTestPage = ({ cardDetails, params }: any) => {
  const isEvenVersion = useStatsig('serve_even_version');

  return (
    <div>
      {JSON.stringify(isEvenVersion)}
      <Card card={isEvenVersion} />
    </div>
  );
};

export default AbTestPage;
