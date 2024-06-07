'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { useEntry } from '../hooks/useEntry';
import { DTOContant } from '@/utils/DTO';
import LogoImg from '../../../../public/logo.jpg';

interface INavLinksProps {
  id: string;
  title: string;
  slug: string;
}

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
      <nav className={styles.nav}>
        <ul>
          {!isLoading &&
            entryData.data.map(({ id, title, slug }: INavLinksProps) => (
              <li key={id}>
                <Link
                  href={`/${slug.startsWith('abtest') ? slug : `abtest/${slug}`}`}
                >
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
