import Image from 'next/image';

import styles from './card.module.css';
import { showVersion } from '@/utils/helper';
import { ICardProps } from '../AbTestPage/AbTestPage';

export interface VersionCardProps {
  cardDetails: ICardProps[];
  currentVersion: 'a' | 'b';
}

export const Card = ({ cardDetails, currentVersion }: VersionCardProps) => {
  const { cardTitle, description, image, hoverBackgroundColor }: any =
    showVersion({ cardDetails, currentVersion: currentVersion });
  const {
    fields: {
      file: { url, fileName },
    },
  } = image[0];

  return (
    <div
      className={styles.container}
      style={
        {
          '--card-hover-background-color': hoverBackgroundColor,
        } as React.CSSProperties
      }
    >
      <Image
        src={`https:${url}`}
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
        alt={fileName}
        className={styles.cardImage}
      />
      <div className={styles.contant}>
        <h3 className={styles.cardTitle}>{cardTitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
