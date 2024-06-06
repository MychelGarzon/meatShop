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
      // If the filter includes "Todas" or no filter is selected, return all products
      if (typeFilter.includes(filterAll) || typeFilter.length === 0) return true;
      // If the filter includes "Otros" and the product type is not in the filter categories, return the product
      if (typeFilter.includes(filterOther) && !filterCategories.includes(product.type)) return true;
      // If the filter includes the product type, return the product
      return typeFilter.includes(product.type);
    });

    setFilteredProducts(filteredProducts);
  }, [typeFilter, data, setFilteredProducts]);

  const handleFilter = (newFilter: string) => {
    // If the filter is "Todas", then select only "Todas"
    if (newFilter === filterAll) {
      setTypeFilter([filterAll]);
      // If the filter includes "Todas", then remove it and add the new filter
    } else if (typeFilter.includes(filterAll)) {
      setTypeFilter([newFilter]);
      // If the filter includes the new filter, then remove it from the current filters
    } else if (typeFilter.includes(newFilter)) {
      const updatedFilter = typeFilter.filter((f: string) => f !== newFilter);
      setTypeFilter(updatedFilter);
      // If the filter does not include the new filter, then add it
    } else {
      const updatedFilter = [...typeFilter, newFilter];
      setTypeFilter(updatedFilter);
    }
  }

  const handleDelete = (filter: string) => {
    // Remove the selected filter
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
