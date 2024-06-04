import { Link } from 'react-router-dom';

import styles from './Cart.module.css'
import { Button } from '@mui/material';

import CartItem from '../cartItem/CartItem';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppDispatch';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(useAppSelector((state) => state.cart.cart))

  return (
    <>
      {cartItems.length === 0
        ?
        <div className={styles['no-items']}>
          <p>Aún no tienes productos seleccionados</p>
          <Link to="/">
            <Button variant='contained' color='primary' >Regresar a productos</Button>
          </Link>
        </div>
        :
        <div>
          <div className={`${styles.cart} ${styles.desktop}`}>
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Precio</p>
          </div>
          <div className={`${styles.cart} ${styles.mobile}`}>
            <p>Lista De Productos</p>
          </div>
          {cartItems.map((item, index) => (
            <CartItem key={item.id} item={item} index={index} cartItems={cartItems} setCartItems={setCartItems} />
          ))}
        </div>}
    </>
  )
}

export default Cart
