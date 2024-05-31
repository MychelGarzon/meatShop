import React from 'react';
import logo from '../../assets/LogoAlCorte.svg';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      
      <div className={styles.logo}>
        <img src={logo} alt="Logo" style={{ height: '150px', width: '150px' }} />
      </div>

      
      <div className={styles.firstColumn}>
        <h2>Compañía</h2>
        <div>
          <a href="#" className={styles.link1}>Sobre nosotros</a>
          <a href="#" className={styles.link2}>Términos y <br /> condiciones</a>
          <a href="#" className={styles.link3}>Privacidad</a>
        </div>
      </div>

      
      <div className={styles.secondColumn}>
        <h2>Soporte</h2>
        <div>
          <a href="#" className={styles.link}>Contáctenos</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

