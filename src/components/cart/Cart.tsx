import { Link } from 'react-router-dom';

import styles from './Cart.module.css'
import { Button } from '@mui/material';

import data from '../../data/data';
import CartItem from '../cartItem/CartItem';

const Cart: React.FC = () => {
  const cartItems = [...data];

  return (
    <>
      {cartItems.length === 0
        ?
        <div className={styles['no-items']}>
          <p>Aún no tienes productos seleccionados</p>
          <Link to="/">
            <Button variant='contained' color='primary' fullWidth>Regresar a productos</Button>
          </Link>
        </div>
        :
        <div>
          <div className={styles.cart}>
            <p>Producto</p>
            <p className={styles.hide}>Cantidad</p>
            <p className={styles.hide}>Precio por kilo</p>
          </div>
          {cartItems.map((item, index) => (
            <CartItem key={item.id} item={item} index={index} amount={1} />
          ))}
        </div>}
    </>
  )
}

export default Cart
