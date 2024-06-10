import { ICardProps } from '@/app/components/AbTestPage/AbTestPage';
import { VersionCardProps } from '@/app/components/Card/Card';

export const getRandomPin = () => {
  const chars = '0123456789';
  const len = 4;
  return [...Array(len)]
    .map((i) => chars[Math.floor(Math.random() * chars.length)])
    .join('');
};
