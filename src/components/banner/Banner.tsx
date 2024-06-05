import { Box } from '@mui/material'
import banner from '../../assets/banner/banner.mp4'
import styles from './banner.module.css'

const Banner = () => {
    return (
        <Box className={styles.bannerContainer}>
            <video autoPlay loop muted className={styles.bannerVideo}>
                <source src={banner} type='video/mp4' />
                <track kind="captions" label='meat-bbq' />
            </video>
            <p className={styles.bannerText}>
                Conoce nuestros productos y agrégalos a tu orden
            </p>
        </Box>
    )
}

export default Banner
