import { Button, Card, CardActions, CardContent, CardMedia, ThemeProvider, Typography, createTheme } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import data from '../../data/data'
import styles from './productCard.module.css'

const ProductCard: React.FC = () => {

  return (
    <Card
      className={styles.productCard}
      sx={{ maxWidth: 368 }}
    >
      <CardMedia
        sx={{ height: 368, width: 368 }}
        image={data[0].image}
        title="product image"
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="body1" component="div">
          Res
        </Typography>
        <Typography
          variant="h5"
          className={styles.productName}
        >
          {data[0].name}
        </Typography>
        <Typography variant="h6">
          ${data[0].price}
        </Typography>
        <Typography variant="body1">
          Precio por kilo
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={styles.addToCardButton}>Agregar
          <ShoppingCartIcon />
        </Button>
      </CardContent>
    </Card >
  )
}

export default ProductCard