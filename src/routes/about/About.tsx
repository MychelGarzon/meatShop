import { Box } from "@mui/material"
import styles from './about.module.css'

const About = () => {
    return (
        <Box className={styles.aboutBox}>
            <h1 className={styles.aboutTitle}>Sobre Nosotros</h1>
            <Box>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Natus nihil unde, inventore iusto aliquid quaerat esse mollitia
                dolor rerum eligendi non sit quos ducimus explicabo vitae,
                assumenda, voluptas ipsum id?</Box>
        </Box>
    )
}

export default About