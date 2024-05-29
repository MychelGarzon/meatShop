import { Box, Button, Card, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './productCard.module.css'
import { Products } from "../../data/data";
import MinusButton from "../minusPlusButton/MinusButton";
import PlusButton from "../minusPlusButton/PlusButton";


const ProductCard: React.FC<Products> = ({ image, name, price, type }) => {
  const XS = useMediaQuery('(min-width:0px)');
  const S = useMediaQuery('(min-width:430px)');
  const M = useMediaQuery('(min-width:834px)');
  const L = useMediaQuery('(min-width:1024px)');

  const buttonSize = XS ? 'small' : S ? 'medium' : M ? 'large' : L ? 'large' : 'large';

  return (
    <Card
      className={styles.productCard}
    >
      <CardMedia
        className={styles.cardMedia}
        image={image}
        title="product image"
      />
      <CardContent className={styles.cardContent}>
        <Typography
          variant="body1"
          component="div"
          className={styles.productType}
        >
          {type}
        </Typography>
        <Typography
          variant="h5"
          className={styles.productName}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          className={styles.productPrice}
        >
          ${price}
        </Typography>
        <Typography
          variant="body1"
          className={styles.pricePerKilo}>
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
          size={buttonSize}
          className={styles.addToCardButton}>Agregar
          <ShoppingCartIcon className={styles.addToCartIcon} />
        </Button>
          <MinusButton />
          <PlusButton />
        </Box>
      </CardContent>
    </Card >
  )
}

export default ProductCard