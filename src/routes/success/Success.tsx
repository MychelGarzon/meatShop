import { Button } from '@mui/material';
import ThankYou from '../../components/thankYou/ThankYou';
import styles from './Success.module.css';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCart } from '../../store/cartSlice';
import ShoppingCart from '../shoppingCart/ShoppingCart';

const Success: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // empty the cart and navigate to the home page
  const handleClick = () => {
    dispatch(setCart([]))
    navigate('/');
  }

  return (
    <div className={styles.success}>
      <ThankYou />
      <p className={styles.title}>Resumen de la compra</p>
      <ShoppingCart />
      <div className={styles.btn}>
        <Button onClick={handleClick} variant='outlined' color='primary' size='large'>ir a página principal</Button>
      </div>
    </div>
  )
}

export default Success;