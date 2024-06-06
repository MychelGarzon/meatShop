import styles from './home.module.css'
import Banner from '../../components/banner/Banner'
import ExtraInfoBanner from '../../components/extraInfoBanner/ExtraInfoBanner'
import ProductCard from '../../components/productCard/ProductCard'
import Box from '@mui/material/Box'
import data from '../../data/data'
import { useState } from 'react'
import Filter from '../../components/filter/Filter'

const Home: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(data);

  return (
    <Box className={styles.homeContainer}>
      <Box className={styles.bannerBox}>
        <Banner />
      </Box>
      <Box className={styles.extraInfoBox}>
        <ExtraInfoBanner />
      </Box>
      <Box className={styles.filterBox}>
        <Filter data={data} setFilteredProducts={setFilteredProducts as (products: unknown[]) => void} />
      </Box>
      <Box className={styles.cardGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Box>
  )
}

export default Home;