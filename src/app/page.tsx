'use client';

import styles from './page.module.css';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from '../store/store';
import { getResources } from '../store/slices/mainSlice';
import getPagesList from '@/utils/contentful';

export default function Home() {
  const fetchData = async () => {
    let data = await getPagesList();
    return data;
  };

  const dispatch = useDispatch();
  const { cardDetails } = useSelector((state) => state.cards);

  return <main className={styles.main}>{JSON.stringify(cardDetails)}</main>;
}
