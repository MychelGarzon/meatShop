import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import styles from './productCard.module.css'
import { Products } from "../../data/data";
import MinusButton from "../minusPlusButton/MinusButton";
import PlusButton from "../minusPlusButton/PlusButton";
import { useEffect, useState } from "react";
import { setCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { formatPrice } from "../../helpers/formatPrice";

const ProductCard: React.FC<Products> = ({ image, name, price, type, id, unit, vat, description }) => {
  const [quantity, setQuantity] = useState<number>(useAppSelector((state) => state.cart.cart.find((item) => item.id === id)?.amount || 0))
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart)

  const handleQuantity = (action: string) => {
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1)
    } else {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1)
      }
    }
  }

  const addToCart = () => {
    const newObj = { image, name, price, type, id, unit, description, vat, itemVatTotal: quantity * price * vat, amount: quantity, subtotal: quantity * price }

    // Find the index of the object with the given id
    const index = cart.findIndex(obj => obj.id === id);

    if (index === -1) {
      // If the object does not exist, add the new object
      dispatch(setCart([...cart, newObj]))
    } else {
      // If the object exists, update its properties
      const updatedCart: Products[] = cart.map(cartItem =>
        cartItem.id === id ? { image, name, price, type, id, unit, description, vat, itemVatTotal: quantity * cartItem.price * vat, amount: quantity, subtotal: quantity * price } : cartItem
      );

      dispatch(setCart(updatedCart))
    }
  }

  const deleteFromCart = () => {
    // find by id and delete
    const newArr = cart.filter((item) => item.id !== id);
    dispatch(setCart(newArr));
  }

  useEffect(() => {
    if (quantity === 0) {
      deleteFromCart()
      return;
    }
    addToCart()
  }, [quantity])

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
          {formatPrice(price)}
        </Typography>
        <Typography
          variant="body1"
          className={styles.pricePerKilo}>
          {`Precio por ${unit}`}
        </Typography>
        <Box className={styles.quantityBox}>
          <Box className={styles.minusButton} >
            <div onClick={() => handleQuantity('')}>
              <MinusButton id={id} />
            </div>
          </Box>
          <Box className={styles.quantity}>
            <Typography variant="h6">
              {quantity}
            </Typography>
          </Box>
          <Box className={styles.plusButton} >
            <div onClick={() => handleQuantity('add')}>
              <PlusButton />
            </div>
          </Box>
        </Box>
      </CardContent>
    </Card >
  )
}

export default ProductCard