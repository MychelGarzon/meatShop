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
        <Box className={styles.chipBoxTodas}>
          <Chip
            label="Todas"
            color="primary"
            size="medium"
            variant="filled"
            className={styles.todasChip}></Chip>
        </Box>
        <Box className={styles.chipBoxSeparate}>
          <Chip
            label="Res"
            color="primary"
            size="medium"
            variant="outlined"
            className={styles.separateChip}>
          </Chip>
          <Chip
            label="Cerdo"
            color="primary"
            size="medium"
            variant="outlined"
            className={styles.separateChip}>
          </Chip>
          <Chip
            label="Pollo"
            color="primary"
            size="medium"
            variant="outlined"
            className={styles.separateChip}>
          </Chip>
          <Chip
            label="Otros"
            color="primary"
            size="medium"
            variant="outlined"
            className={styles.separateChip}>
          </Chip>
        </Box>
      </Box>
    </Box>
  )

}

export default Filter