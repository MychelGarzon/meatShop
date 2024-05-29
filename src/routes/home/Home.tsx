import styles from './home.module.css'
import Banner from '../../components/banner/Banner'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import data from '../../data/data'
import { useState } from 'react'

const Home: React.FC = () => {
  const [filter, setFilter] = useState('Todas');

  const filteredProducts = data.filter(product => {
    if (filter === 'Todas' || filter === '') return true;
    if (filter === 'Otros') return product.type !== 'Pollo' && product.type !== 'Cerdo' && product.type !== 'Res';
    return product.type === filter;
  });

  return (
    <Container className={styles.homeContainer}>
      <Box className={styles.bannerBox}>
        <Banner />
      </Box>
      <Box className={styles.filterBox}>
        <Filter setFilter={setFilter} />
      </Box>
      <Box className={styles.cardGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Container>
  )
}

export default Home;