import { Typography, Box, Chip } from '@mui/material'
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
      <Box className={styles.filterButtons}>
        <Chip
          label="Todas"
          color="primary"
          size="medium"
          variant="filled"
          className={styles.todasChip}></Chip>
        <Box className={styles.chipBox}>
          <Chip
            label="Todas"
            color="primary"
            size="medium"
            variant="filled"></Chip>
          <Chip
            label="Todas"
            color="primary"
            size="medium"
            variant="filled"></Chip>
          <Chip
            label="Todas"
            color="primary"
            size="medium"
            variant="filled"></Chip>
        </Box>
      </Box>
    </Box>
  )

}

export default Filter