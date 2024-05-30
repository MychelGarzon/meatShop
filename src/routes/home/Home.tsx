import styles from './home.module.css'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import data from '../../data/data'

const Home: React.FC = () => {
  return (
    <Container className={styles.homeContainer}>
      <Header className={styles.headerBox} />
      <Box className={styles.bannerBox}>
        <Banner />
      </Box>
      <Box className={styles.filterBox}>
        <Filter />
      </Box>
      <Box className={styles.cardGrid}>
        {data.map((product) => (
          <ProductCard key={product.id}{...product} />
        ))}
      </Box>
    </Container>
  )
}

export default Home
