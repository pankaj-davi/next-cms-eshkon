'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { useEntry } from '../../../hooks/useEntry';
import { DTOContant } from '@/utils/DTO';

const Header = () => {
  const { entryData, isLoading } = useEntry({
    contentType: 'pages',
    dtoFunction: DTOContant,
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">SIMPLE CMS TEST</Link>
      </div>
    </header>
  );
};

export default Header;
