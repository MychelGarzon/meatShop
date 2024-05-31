import { useState } from 'react';
import styles from './CartItem.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';

import MinusButton from '../minusPlusButton/MinusButton';
import PlusButton from '../minusPlusButton/PlusButton';
import { useAppSelector } from '../../hooks/useAppDispatch';

import { formatNumber } from '../../helpers/formatNumber';
import { formatPrice } from '../../helpers/formatPrice';

interface Props {
  index: number;
  item: {
    id: string;
    image: string;
    type: string;
    name: string;
    price: number;
  };
  amount: number;
}

const CartItem: React.FC<Props> = ({ index, item, amount }) => {
  const [quantity, setQuantity] = useState<number>(amount);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const cart = useAppSelector((state) => state.cart.cart);

  console.log(cart, "this is cart info")

  const handleQuantity = (action: string) => () => {
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  };

  const handleDelete = () => {
    console.log('delete', item.id);
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* desktop view */}
      <div className={`${styles['cart-item']} ${styles.hide}`}>
        <div className={styles.flex}>
          <p className={styles['line-number']}>{formatNumber(index + 1)}</p>
          <div className={styles.product}>
            <img src={item.image} alt="product" />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.type}>{item.type}</p>
          </div>
        </div>
        <div className={styles.flex3}>
          <div className={styles['button-size']} onClick={handleQuantity('')}>
            <MinusButton />
          </div>
          <p className={styles.quantity}>{quantity}</p>
          <div onClick={handleQuantity('add')}>
            <PlusButton />
          </div>
        </div>
        <div className={styles.flex2}>
          <p className={styles.price}>{formatPrice(item.price)}</p>
          <p className={styles.delete}>
            <DeleteIcon color="primary" onClick={openModal} />
          </p>
        </div>
      </div>
      {/* mobile view */}
      <div className={`${styles['cart-item']} ${styles.show}`}>
        <p className={styles['line-number']}>{formatNumber(index + 1)}</p>
        <div className={styles.flex3}>
          <div>
            <img src={item.image} alt="product" />
          </div>
          <div>
            <p className={styles.type}>{item.type}</p>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>{formatPrice(item.price)}</p>
            <div className={styles.flex2}>
              <div className={styles.flex3}>
                <div className={styles['button-size']} onClick={handleQuantity('')}>
                  <MinusButton />
                </div>
                <p className={styles.quantity}>{quantity}</p>
                <div onClick={handleQuantity('add')}>
                  <PlusButton />
                </div>
              </div>
              <p className={styles.delete}>
                <DeleteIcon color="primary" onClick={openModal} />
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ConfirmationModal
          onConfirm={handleDelete}
          onCancel={closeModal}
          message="¿Estás seguro de eliminar el producto?"
        />
      )}
    </>
  );
};

export default CartItem;
