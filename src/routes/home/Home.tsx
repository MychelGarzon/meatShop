import styles from './home.module.css'
import Banner from '../../components/banner/Banner'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

declare module '@mui/system' {
  interface BreakpointOverrides {
    android: true;
    iphone: true;
    tablet: true;
    laptop: true;
    desktop: true;
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      android: 0,
      iphone: 430,
      tablet: 834,
      laptop: 1024,
      desktop: 1280,
    },
  },
})

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.homeContainer}>
        <Banner />
        <Filter />
        <Box className={styles.cardBox}>
          <Grid container spacing={{ android: 1, iphone: 1, tablet: 2, laptop: 3 }}>
            {Array.from(Array(3)).map((_, index) => (
              <Grid
                android={12}
                iphone={6}
                tablet={4}
                laptop={4}
                desktop={4}
                key={index}
              >
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
