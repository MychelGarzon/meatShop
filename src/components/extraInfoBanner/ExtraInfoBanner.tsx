import { Box } from "@mui/material"
import styles from './extraInfoBanner.module.css'

const extraInfoBanner = () => {
    return (
        <Box className={styles.extraInfoBanner}>
            <p className={styles.extraInfoTitle}>También puedes pedir por WhatsApp o correo electrónico</p>
            <p className={styles.extraInfoSubTitle}>320 8981234</p>
            <p className={styles.extraInfoSubTitle}>alcorte@gmail.com</p>
        </Box>
    )
}

export default extraInfoBanner