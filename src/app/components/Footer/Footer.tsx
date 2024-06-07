import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h5>
          {'Footer'}
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
