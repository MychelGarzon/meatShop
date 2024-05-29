import { Typography, Box } from '@mui/material'
import styles from './filter.module.css'

const Filter = () => {
  return (
    <Box className={styles.filterBox}>
      <Typography
        variant="h6"
        className={styles.filterTitle}
      >
        Selecciona la categoría de tu interés
      </Typography>
    </Box>
  )
}

export default Filter