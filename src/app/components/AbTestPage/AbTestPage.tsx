'use client';

import React from 'react';
import Card from '../Card/Card';
import useStatsig from '@/hooks/useStatsig';

export interface ICardProps {
  cardTitle: string;
  description: string;
  image: any[];
  version: string;
  hoverBackgroundColor: string;
}

interface AbTestPageProps {
  cardDetails: ICardProps[];
}

const AbTestPage: React.FC<AbTestPageProps> = ({ cardDetails }) => {
  const { isEnabled, isLoading } = useStatsig('serve_even_version');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isEnabled === null) {
    return <div>Failed to determine gate status</div>;
  }

  return (
    <Card cardDetails={cardDetails} currentVersion={isEnabled ? 'a' : 'b'} />
  );
};

export default AbTestPage;
