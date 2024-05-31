import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import styles from './productCard.module.css'
import { Products } from "../../data/data";
import MinusButton from "../minusPlusButton/MinusButton";
import PlusButton from "../minusPlusButton/PlusButton";


const ProductCard: React.FC<Products> = ({ image, name, price, type }) => {
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
        <Box className={styles.quantityBox}>
          <Box className={styles.minusButton}>
            <MinusButton />
          </Box>
          <Box className={styles.quantity}>
            <Typography variant="h6">
              0
            </Typography>
          </Box>
          <Box className={styles.plusButton}>
            <PlusButton />
          </Box>
        </Box>
      </CardContent>
    </Card >
  )
}

export default ProductCard