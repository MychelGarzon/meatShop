import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './productCard.module.css'
import { Products } from "../../data/data";
import MinusButton from "../minusPlusButton/MinusButton";
import PlusButton from "../minusPlusButton/PlusButton";


const ProductCard: React.FC<Products> = ({ ...product
}) => {
  return (
    <Card
      className={styles.productCard}
      sx={{ maxWidth: 368 }}
    >
      <CardMedia
        sx={{ height: 368, width: 368 }}
        image={product?.image}
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
          {product?.name}
        </Typography>
        <Typography variant="h6">
          ${product?.price}
        </Typography>
        <Typography variant="body1">
          Precio por kilo
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          
          }}
        >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={styles.addToCardButton}>Agregar
          <ShoppingCartIcon />
          </Button>
          <MinusButton />
          <PlusButton />
        </Box>
      </CardContent>
    </Card >
  )
}

export default ProductCard