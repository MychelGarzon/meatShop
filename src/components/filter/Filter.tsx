import { Typography, Box, Chip } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import styles from './filter.module.css'
import React from 'react';

type FilterProps = {
  setFilter: (filter: string[]) => void;
};

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  const [selectedFilter, setSelectedFilter] = React.useState<string[]>([]);

  const handleFilter = (filter: string) => {
    if (filter === 'Todas') {
      setSelectedFilter(['Todas']);
      setFilter(['Todas']);
    } else {
      if (selectedFilter.includes('Todas')) {
        setSelectedFilter([filter]);
        setFilter([filter]);
      } else if (selectedFilter.includes(filter)) {
        const newFilter = selectedFilter.filter(f => f !== filter);
        setSelectedFilter(newFilter);
        setFilter(newFilter);
      } else {
        const newFilter = [...selectedFilter, filter];
        setSelectedFilter(newFilter);
        setFilter(newFilter);
      }
    }
  }

  const handleDelete = (filter: string) => {
    const newFilter = selectedFilter.filter(f => f !== filter);
    setSelectedFilter(newFilter);
    setFilter(newFilter);
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
            className={selectedFilter.includes("Todas") ? styles.chipClicked : styles.todasChip} component="button"
            onClick={() => handleFilter("Todas")}
          ></Chip>
        </Box>
        <Box className={styles.chipBoxSeparate}>
          {["res", "cerdo", "pollo", "otros"].map((label) => (
            <Chip
              key={label}
              label={label.charAt(0).toUpperCase() + label.slice(1)}
              color="primary"
              size="medium"
              variant="outlined"
              component="button"
              onClick={() => handleFilter(label)}
              className={selectedFilter.includes(label) ? styles.chipClicked : styles.separateChip}
              onDelete={() => handleDelete(label)}
              deleteIcon={selectedFilter.includes(label) ? <CancelIcon style={{ color: 'lightgrey', opacity: "0.7" }} /> : <span />} />
          ))}
        </Box>
      </Box>
    </Box>
  )

}

export default Filter