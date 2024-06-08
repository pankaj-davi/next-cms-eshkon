'use client';

import React from 'react';
import Card from '../Card/Card';
import useStatsig from '@/hooks/useStatsig';
import styles from './AbTestPage.module.css';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getContant } from '@/store/slices/mainSlice';

export interface ICardProps {
  cardTitle: string;
  description: string;
  image: any[];
  version: string;
  hoverBackgroundColor: string;
}

interface AbTestPageProps {
  cardDetails: ICardProps[];
  pageDetail: any;
}

const AbTestPage = ({ cardDetails, pageDetail }: AbTestPageProps) => {
  const { isEnabled, isLoading } = useStatsig('serve_even_version');
  const dispatch = useAppDispatch();
  const contantLoaded = useAppSelector((state) => state.cards.isLoaded);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  (function () {
    if (!isLoading) {
      dispatch(getContant(!isLoading));
    }
  })();

  if (isEnabled === null) {
    return <div>Failed to determine gate status</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.contant}>
        <h2 className={styles.heading}>{pageDetail.title}</h2>
        <p className={styles.contentPage}>{pageDetail.pageContant}</p>
      </div>
      <Card cardDetails={cardDetails} currentVersion={isEnabled ? 'a' : 'b'} />
    </div>
  );
};

export default AbTestPage;
