import { Box } from "@mui/material"
import styles from './termsAndConditions.module.css'

const TermsAndConditions = () => {
    return (
        <Box className={styles.termsBox}>
            <h1 className={styles.termsTitle}>Términos y condiciones</h1>
            <Box>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cumque, tempore. Quasi exercitationem animi consectetur.
                Exercitationem rerum eligendi quos libero fuga cum voluptas
                ipsa rem optio similique laboriosam, debitis totam tempora?
            </Box>
        </Box>
    )
}

export default TermsAndConditions