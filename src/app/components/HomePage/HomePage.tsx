'use client';
import React from 'react';
import Link from 'next/link';

import styles from './HomePage.module.css';

import { useEntry } from '@/hooks/useEntry';
import { DTOContant } from '@/utils/DTO';

interface INavLinksProps {
  id: string;
  title: string;
  slug: string;
  pageContant: string;
}

export default function HomePage() {
  const { entryData, isLoading } = useEntry({
    contentType: 'pages',
    dtoFunction: DTOContant,
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>{'List of Routes'}</h2>
        <ul>
          {!isLoading &&
            entryData.data.map(({ id, title, slug }: INavLinksProps) => (
              <li key={id} className={styles.listItem}>
                <Link
                  href={`/${slug.startsWith('abtest') ? slug : `abtest/${slug}`}`}
                >
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
