import { useAppSelector } from '../../hooks/useAppDispatch';
import styles from './minusPlusButton.module.css';

interface Props {
  id?: string;
}

const MinusButton: React.FC<Props> = ({ id }) => {
  const cart = useAppSelector((state) => state.cart.cart);

  // find object by id
  const objById = cart.find((item) => item.id === id);

  return (
    <button
      className={`${styles.minusPlusButton} ${styles.minusButton}`}
      disabled={objById?.amount === 0 || objById?.amount === undefined}>
      -
    </button>
  );
}

export default MinusButton;