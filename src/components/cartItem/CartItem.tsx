import { useEffect, useState } from 'react';
import styles from './CartItem.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';

import MinusButton from '../minusPlusButton/MinusButton';
import PlusButton from '../minusPlusButton/PlusButton';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { setCart } from '../../store/cartSlice';

import { formatNumber } from '../../helpers/formatNumber';
import { formatPrice } from '../../helpers/formatPrice';
import { Products } from '../../data/data';

interface Props {
  index: number;
  item: Products;
  cartItems: Products[];
  setCartItems: React.Dispatch<React.SetStateAction<Products[]>>;
}

const CartItem: React.FC<Props> = ({ index, item, setCartItems }) => {
  const [quantity, setQuantity] = useState<number>(item.amount || 0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [precio, setPrecio] = useState<number>(item.subtotal || 0);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const handleQuantity = (action: string) => {
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1)
    } else {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1)
      }
    }
  }

  const updateCart = (id: string) => {
    const updatedCart: Products[] = cart.map(cartItem =>
      cartItem.id === id ? { ...cartItem, amount: quantity, subtotal: quantity * cartItem.price } : cartItem
    );
    cart.map(cartItem => cartItem.id === id ? setPrecio(quantity * cartItem.price) : null)

    dispatch(setCart(updatedCart))
  }

  const handleDelete = (id: string) => {
    // find by id and delete
    const newArr = cart.filter((item) => item.id !== id);
    setCartItems(newArr);
    dispatch(setCart(newArr));
    setIsModalOpen(false);
  };

  useEffect(() => {
    handleQuantity
    updateCart(item.id)
  }, [quantity])

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
            <p className={styles['kilo-price']}>{`${formatPrice(item.price)} / ${item.unit}`}</p>
          </div>
        </div>
        <div className={styles.flex3}>
          <div className={styles['button-size']} onClick={() => handleQuantity('')}>
            <MinusButton />
          </div>
          <p className={styles.quantity}>{quantity}</p>
          <div onClick={() => handleQuantity('add')}>
            <PlusButton />
          </div>
        </div>
        <div className={styles.flex2}>
          <p className={styles.price}>{formatPrice(precio)}</p>
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
            <div className={styles['mob-price']}>
              <p className={styles['kilo-price']}>{`${formatPrice(item.price)} / ${item.unit}`}</p>
              <p className={styles.price}>{formatPrice(precio)}</p>
            </div>
            <div className={styles.flex2}>
              <div className={styles.flex3}>
                <div className={styles['button-size']} onClick={() => handleQuantity('')}>
                  <MinusButton />
                </div>
                <p className={styles.quantity}>{quantity}</p>
                <div onClick={() => handleQuantity('add')}>
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
          onConfirm={() => handleDelete(item.id)}
          onCancel={closeModal}
          message="¿Estás seguro de eliminar el producto?"
        />
      )}
    </>
  );
};

export default CartItem;
