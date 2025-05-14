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
            <div></div>
            <p className={styles.bannerText}>
            Perniles de cerdo y anchetas de carnes, ideales para esta Navidad.
</p>

        </Box>
    )
}

export default Banner
