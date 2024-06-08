'use client';

import React from 'react';
import styles from './Footer.module.css';
import { useAppSelector } from '@/store/hooks';

const Footer = () => {
  const contantLoaded = useAppSelector((state) => state.cards.isLoaded);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h5>
          Footer &copy; {new Date().getFullYear()} MyWebsite. All rights
          reserved.
        </h5>
        {contantLoaded ? (
          <p className={styles.loadedMessage}>The page has fully loaded.</p>
        ) : (
          <p>{'...Loading'}</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
