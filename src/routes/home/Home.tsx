import styles from './home.module.css'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import data from '../../data/data'
import { useState } from 'react'

const Home: React.FC = () => {
  const [filter, setFilter] = useState<string[]>(['Todas']);

  const filteredProducts = data.filter(product => {
    if (filter.includes('Todas') || filter.length === 0) return true;
    if (filter.includes('otros') && product.type !== 'pollo' && product.type !== 'cerdo' && product.type !== 'res') return true;
    return filter.includes(product.type);
  });

  return (
    <Container className={styles.homeContainer}>
      <Header className={styles.headerBox} />
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