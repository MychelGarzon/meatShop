import { Box } from '@mui/material'
import banner from '../../assets/banner/banner.jpeg'
import styles from './banner.module.css'

const Banner = () => {
    return (
        <Box className={styles.bannerContainer}>
            <img src={banner} alt="banner" className={styles.bannerImage} />
            <p className={styles.bannerText}>
                Conoce nuestros productos y agrégalos a tu orden
            </p>
        </Box>
    )
}

export default Banner
