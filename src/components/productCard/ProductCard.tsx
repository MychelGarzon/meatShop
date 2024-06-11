import { Box, Card, CardContent, CardMedia, Typography, Modal, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../data/data";
import { setCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { formatPrice } from "../../helpers/formatPrice";
import ScreenDetails from "../screenDetails/ScreenDetails";
import QuantityControls from "../quantityControls/QuantityControls";
import styles from './productCard.module.css';
import { ShoppingCart } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCard: React.FC<Product> = ({ image, name, price, type, id, unit, vat, description }) => {
  const [quantity, setQuantity] = useState<number>(useAppSelector((state) => state.cart.cart.find((item) => item.id === id)?.amount || 0));
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'warning', message: string, icon: JSX.Element } | null>(null);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleQuantity = (action: string) => {
    setClicked(true);
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else if (action === 'subtract') {
      setQuantity((prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0);
    }
  };

  const addToCart = () => {
    const newObj = { image, name, price, type, id, unit, description, vat, itemVatTotal: quantity * price * vat, amount: quantity, subtotal: quantity * price };

    const index = cart.findIndex(obj => obj.id === id);
    if (clicked && index === -1) {
      setAlert({ type: 'success', message: `'${name}' ha sido agregado al carrito correctamente.`, icon: <ShoppingCart /> });
    }
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
    if (clicked) {
      setAlert({
        type: 'warning', message: `'${name}' ha sido eliminado del carrito correctamente.`, icon: <DeleteIcon />
      });
    }
  };

  useEffect(() => {
    if (quantity === 0) {
      deleteFromCart();
    } else {
      addToCart();
    }
  }, [quantity]);

  useEffect(() => {
    if (alert) {
      setClicked(false);
      const timer = setTimeout(() => {
        setAlert(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

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
            <QuantityControls id={id} quantity={quantity} unit={unit} handleQuantity={handleQuantity} />
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
      {alert && (
        <Alert variant="filled" severity={alert.type} className={styles.alert} icon={false}>
          <Box display="flex" alignItems="center">
            {alert.icon}
            <Box ml={1}>{alert.message}</Box>
          </Box>
        </Alert>
      )}
    </>
  );
};

export default ProductCard;