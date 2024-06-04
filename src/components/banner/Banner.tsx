import { Box } from '@mui/material'
import banner from '../../assets/banner/banner.mp4'
import styles from './banner.module.css'

const Banner = () => {
    return (
        <Box className={styles.bannerContainer}>
            <video src={banner} autoPlay loop muted className={styles.bannerVideo} />
            <p className={styles.bannerText}>
                Conoce nuestros productos y agrégalos a tu orden
            </p>
        </Box>
    )
}

export default Banner
