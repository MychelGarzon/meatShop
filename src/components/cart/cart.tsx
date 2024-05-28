import { Button } from '@mui/material';
import styles from './Cart.module.css'
import { Link } from 'react-router-dom';
import data from '../../data/data';

const Cart: React.FC = () => {
  const cartItems = [];

  console.log(data)

  return (
    <>
      {cartItems.length === 0
        ?
        <div className={styles['no-items']}>
          <p>Aún no tienes productos seleccionados</p>
          <Link to="/">
            <Button variant='contained' color='primary' fullWidth >Regresar a productos</Button>
          </Link>
        </div>
        :
        <div>
          <div className={styles.cart}>
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Precio por kilo</p>
          </div>
        </div>}
    </>
  )
}

export default Cart