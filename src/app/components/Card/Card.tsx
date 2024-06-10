import Image from 'next/image';

import styles from './card.module.css';
import { ICardProps } from '../AbTestPage/AbTestPage';

interface ICurrentCard {
  currentCard: ICardProps;
}

export const CardAVersion = ({ currentCard }: ICurrentCard) => {
  const { cardTitle, description, image, hoverBackgroundColor } = currentCard;
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
      <div className={styles.contant}>
        <h3 className={styles.cardTitle}>{cardTitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <Image
        src={`https:${url}`}
        width={100}
        height={100}
        layout="responsive"
        objectFit="cover"
        alt={fileName}
        className={styles.cardAImg}
      />
    </div>
  );
};

export const CardBVersion = ({ currentCard }: ICurrentCard) => {
  const { cardTitle, description, image, hoverBackgroundColor } = currentCard;
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
        className={styles.cardBImg}
      />
      <div className={styles.contant}>
        <h3 className={styles.cardTitle}>{cardTitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
