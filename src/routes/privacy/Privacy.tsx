import { Box } from "@mui/material"
import styles from './privacy.module.css'

const About = () => {
    return (
        <Box className={styles.privacyBox}>
            <h1 className={styles.privacyTitle}>Privacidad</h1>
            <Box>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Natus nihil unde, inventore iusto aliquid quaerat esse mollitia
                dolor rerum eligendi non sit quos ducimus explicabo vitae,
                assumenda, voluptas ipsum id?</Box>
        </Box>
    )
}

export default About