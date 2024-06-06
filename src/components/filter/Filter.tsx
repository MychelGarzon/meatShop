import { Box, Chip } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from './filter.module.css';
import React, { useEffect } from 'react';
import { Products } from '../../data/data';

const filterAll = 'todas';
const filterOther = 'otros';
const filterCategories = ['res', 'cerdo', 'pollo', 'charcutería', filterOther];

type FilterProps = {
  data: Products[];
  setFilteredProducts: (products: unknown[]) => void;
};

const Filter: React.FC<FilterProps> = ({ data, setFilteredProducts }) => {
  const [typeFilter, setTypeFilter] = React.useState<string[]>([filterAll]);

  useEffect(() => {
    const filteredProducts = data.filter((product) => {
      if (typeFilter.includes(filterAll) || typeFilter.length === 0) return true;
      if (typeFilter.includes(filterOther) && !filterCategories.includes(product.type)) return true;
      return typeFilter.includes(product.type);
    });

    setFilteredProducts(filteredProducts);
  }, [typeFilter, data, setFilteredProducts]);

  const handleFilter = (newFilter: string) => {
    if (newFilter === filterAll) {
      setTypeFilter([filterAll]);
    } else if (typeFilter.includes(filterAll)) {
      setTypeFilter([newFilter]);
    } else if (typeFilter.includes(newFilter)) {
      const updatedFilter = typeFilter.filter((f: string) => f !== newFilter);
      setTypeFilter(updatedFilter);
    } else {
      const updatedFilter = [...typeFilter, newFilter];
      setTypeFilter(updatedFilter);
    }
  }

  const handleDelete = (filter: string) => {
    const newFilter = typeFilter.filter(f => f !== filter);
    setTypeFilter(newFilter);
  }

  return (
    <Box className={styles.filterContainer}>
      <p className={styles.filterTitle}>
        Selecciona la categoría de tu interés
      </p>
      <Box className={styles.filterButtons}>
        <Chip
          label="Todas"
          color="primary"
          size="medium"
          variant="filled"
          className={typeFilter.includes(filterAll) ? styles.chipClicked : styles.todasChip}
          component="button"
          onClick={() => handleFilter(filterAll)}
        />
        <Box className={styles.divider} />
        {filterCategories.map((label) => (
          <Chip
            key={label}
            label={label.charAt(0).toUpperCase() + label.slice(1)}
            color="primary"
            size="medium"
            variant="outlined"
            component="button"
            onClick={() => handleFilter(label)}
            className={typeFilter.includes(label) ? styles.chipClicked : styles.separateChip}
            onDelete={() => handleDelete(label)}
            deleteIcon={typeFilter.includes(label) ? <CancelIcon style={{ color: 'lightgrey', opacity: "0.7" }} /> : <span />}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Filter;
