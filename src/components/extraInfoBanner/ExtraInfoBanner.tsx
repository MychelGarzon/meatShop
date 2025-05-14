import { Box } from "@mui/material";
import styles from "./extraInfoBanner.module.css";

const extraInfoBanner = () => {
  return (
    <Box className={styles.extraInfoBanner}>
        <p className={styles.extraInfoTitle}>¡Haz tu pedido de manera fácil y rápida!</p>
        <p className={styles.extraInfoTitle}>¡Disfruta de nuestros deliciosos asados a domicilio! </p>
      <p className={styles.extraInfoTitle}>
        Contáctanos a través de esta
        plataforma, WhatsApp, o correo electrónico.
      </p>{" "}
      <p className={styles.extraInfoSubTitle}>
        📞{" "}
        <a href="tel:3124199896" className={styles.link}>
        3124199896
        </a>
      </p>
      <p className={styles.extraInfoSubTitle}>
        ✉️{" "}
        <a href="mailto:alcortecarnescol@gmail.com" className={styles.link}>
        alcortecarnescol@gmail.com
        </a>
      </p>
    </Box>
  );
};

export default extraInfoBanner;
