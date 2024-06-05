import { Box, Card, CardContent, CardMedia, Typography, Modal } from "@mui/material";
import styles from './productCard.module.css';
import { Product } from "../../data/data";
import MinusButton from "../minusPlusButton/MinusButton";
import PlusButton from "../minusPlusButton/PlusButton";
import ScreenDetails from "../screenDetails/ScreenDetails";
import { useEffect, useState } from "react";
import { setCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { formatPrice } from "../../helpers/formatPrice";

const ProductCard: React.FC<Product> = ({ image, name, price, type, id, unit, vat, description }) => {
  const [quantity, setQuantity] = useState<number>(useAppSelector((state) => state.cart.cart.find((item) => item.id === id)?.amount || 0));
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleQuantity = (action: string) => {
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === 'subtract') {
      setQuantity((prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0);
    }
  };

  const addToCart = () => {
    const newObj = { image, name, price, type, id, unit, description, vat, itemVatTotal: quantity * price * vat, amount: quantity, subtotal: quantity * price };

    const index = cart.findIndex(obj => obj.id === id);

    if (index === -1) {
      dispatch(setCart([...cart, newObj]));
    } else {
      const updatedCart: Product[] = cart.map(cartItem =>
        cartItem.id === id ? { image, name, price, type, id, unit, description, vat, itemVatTotal: quantity * cartItem.price * vat, amount: quantity, subtotal: quantity * price } : cartItem
      );

      dispatch(setCart(updatedCart));
    }
  };

  const deleteFromCart = () => {
    const newArr = cart.filter((item) => item.id !== id);
    dispatch(setCart(newArr));
  };

  useEffect(() => {
    if (quantity === 0) {
      deleteFromCart();
      return;
    }
    addToCart();
  }, [quantity]);

  return (
    <>
      <Card className={styles.productCard} onClick={handleOpen}>
        <CardMedia className={styles.cardMedia} image={image} title="product image" />
        <CardContent className={styles.cardContent}>
          <Typography variant="body1" component="div" className={styles.productType}>
            {type}
          </Typography>
          <Typography variant="h5" className={styles.productName}>
            {name}
          </Typography>
          <Typography variant="h6" className={styles.productPrice}>
            {formatPrice(price)}
          </Typography>
          <Typography variant="body1" className={styles.pricePerKilo}>
            {`Precio por ${unit}`}
          </Typography>
          <Box className={styles.quantityBox}>
            <Box className={styles.minusButton}>
              <div role="button" onClick={(e) => { e.stopPropagation(); handleQuantity('subtract'); }}>
                <MinusButton id={id} />
              </div>
            </Box>
            <Box className={styles.quantity}>
              <Typography variant="h6">{quantity}</Typography>
            </Box>
            <Box className={styles.plusButton}>
              <div role="button" onClick={(e) => { e.stopPropagation(); handleQuantity('add'); }}>
                <PlusButton />
              </div>
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <div>
          <ScreenDetails
            product={{ image, name, price, type, id, unit, description, vat }}
            quantity={quantity}
            handleQuantity={handleQuantity}
            handleClose={handleClose}
          />
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;
