'use client';

import { useState, useEffect } from 'react';

import Card from '../Card/Card';

const AbTestPage = ({ cardDetails }: any) => {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  if (!selectedCard) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card card={selectedCard} />
    </div>
  );
};

export default AbTestPage;
