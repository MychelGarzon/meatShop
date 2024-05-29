import { Typography, Box, Chip } from '@mui/material'
import styles from './filter.module.css'
import React from 'react';

type FilterProps = {
  setFilter: (filter: string) => void;
};

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  const handleFilter = (filter: string) => {
    setFilter(filter);
  }
  
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
            className={styles.todasChip}
            component="button"
            onClick={() => handleFilter("Todas")}
          ></Chip>
        </Box>
        <Box className={styles.chipBoxSeparate}>
          <Chip
            label="Res"
            color="primary"
            size="medium"
            variant="outlined"
            component="button"
            onClick={() => handleFilter("res")}
            className={styles.separateChip}>
          </Chip>
          <Chip
            label="Cerdo"
            color="primary"
            size="medium"
            variant="outlined"
            component="button"
            onClick={() => handleFilter("cerdo")}
            className={styles.separateChip}>
          </Chip>
          <Chip
            label="Pollo"
            color="primary"
            size="medium"
            variant="outlined"
            component="button"
            onClick={() => handleFilter("pollo")}
            className={styles.separateChip}>
          </Chip>
          <Chip
            label="Otros"
            color="primary"
            size="medium"
            variant="outlined"
            component="button"
            onClick={() => handleFilter("otros")}
            className={styles.separateChip}>
          </Chip>
        </Box>
      </Box>
    </Box>
  )

}

export default Filter