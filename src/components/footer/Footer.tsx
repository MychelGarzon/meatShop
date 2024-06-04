import React from 'react';
import { Box, Link } from '@mui/material';
import logo from '../../assets/LogoFooter.svg';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.allColumns}>
        <Box className={styles.logo}>
          <img src={logo} alt="Logo" />
        </Box>
        <Box className={styles.columns} >
          <Box className={styles.column}>
            <p className={styles.footerTitle}>Compañía</p>
            <Link href="/about" className={styles.footerSubTitle}>Sobre nosotros</Link>
            <Link href="/terms" className={styles.footerSubTitle}>Términos y condiciones</Link>
            <Link href="/privacy" className={styles.footerSubTitle}>Privacidad</Link>
          </Box>
          <Box className={styles.column}>
            <p className={styles.footerTitle}>Contacto</p>
            <p className={styles.footerSubTitle}>WA: +571234567890</p>
            <p className={styles.footerSubTitle}>alcorte@gmail.com</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;