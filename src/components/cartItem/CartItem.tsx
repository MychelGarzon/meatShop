import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './CartItem.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationModal from '../confirmationModal/ConfirmationModal';

import MinusButton from '../minusPlusButton/MinusButton';
import PlusButton from '../minusPlusButton/PlusButton';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCart } from '../../store/cartSlice';

import { formatNumber } from '../../helpers/formatNumber';
import { formatPrice } from '../../helpers/formatPrice';
import { Product } from '../../data/data';
import { useLocation } from 'react-router';

interface Props {
  index: number;
  item: Product;
  cart: Product[];
}

const CartItem: React.FC<Props> = ({ index, item, cart }) => {
  const [quantity, setQuantity] = useState<number>(item.amount || 0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [precio, setPrecio] = useState<number>(item.subtotal || 0);

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const prevQuantityRef = useRef(quantity);

  // increase or decrease the quantity of the product
  const handleQuantity = (action: string) => {
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1)
    } else if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  /* update the cart with the new quantity:
  calculate new subtotal and vat total for the cart item */
  const updateCart = useCallback((id: string) => {
    const updatedCart: Product[] = cart.map(cartItem =>
      cartItem.id === id ? { ...cartItem, amount: quantity, subtotal: quantity * cartItem.price, itemVatTotal: quantity * cartItem.price * cartItem.vat } : cartItem
    );
    cart.map(cartItem => cartItem.id === id ? setPrecio(quantity * cartItem.price) : null)

    dispatch(setCart(updatedCart))
  }, [cart, quantity, dispatch, setPrecio]);

  useEffect(() => {
    if (quantity !== prevQuantityRef.current) {
      updateCart(item.id);
      prevQuantityRef.current = quantity;
    }
  }, [quantity, item.id, updateCart]);

  // delete the product from the cart
  const handleDelete = (id: string) => {
    const newArr = cart.filter((item) => item.id !== id);
    dispatch(setCart(newArr));
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
      <div className={`${styles['cart-item']} ${styles.desktop}`}>
        <div className={styles.flex}>
          <p className={styles['line-number']}>{formatNumber(index + 1)}</p>
          <div>
            <img src={item.image} alt="product" />
            <p className={styles.name}>{item.name}</p>
            <p className={styles.type}>{item.type}</p>
            <p className={styles['kilo-price']}>{`${formatPrice(item.price)} / ${item.unit}`}</p>
          </div>
        </div>
        <div className={styles.flex}>
          {pathname !== '/success' && <div role="button" onClick={() => handleQuantity('')}>
            <MinusButton id={item.id} />
          </div>}
          <p className={styles.quantity}>{quantity} {pathname === '/success' && item.unit}</p>
          {pathname !== '/success' && <MinusButton id={item.id} onClick={() => handleQuantity('')} />
       }
        </div>
        <div className={styles.flex2}>
          <p className={styles.price}>{formatPrice(precio)}</p>
          {pathname !== '/success' && <p className={styles.delete}>
            <DeleteIcon color="primary" onClick={openModal} />
          </p>}
        </div>
      </div>
      {/* mobile view */}
      <div className={`${styles['cart-item']} ${styles.mobile}`}>
        <p className={styles['line-number']}>{formatNumber(index + 1)}</p>
        <div className={styles.flex4}>
          <div>
            <img src={item.image} alt="product" />
          </div>
          <div className={styles['mob-right-col']}>
            <p className={styles.type}>{item.type}</p>
            <p className={styles.name}>{item.name}</p>
            <p className={styles['kilo-price']}>{`${formatPrice(item.price)} / ${item.unit}`}</p>
            <div className={styles['mob-price']}>
              <p className={styles.price}>{formatPrice(precio)}</p>
            </div>
            <div className={styles.flex2}>
              <div className={styles.flex3}>
                {pathname !== '/success' && <div role="button" onClick={() => handleQuantity('')}>
                  <MinusButton id={item.id} />
                </div>}
                <p className={styles.quantity}>{quantity} {pathname === '/success' && item.unit}</p>
                {pathname !== '/success' && <div role="button" onClick={() => handleQuantity('add')}>
                  <PlusButton />
                </div>}
              </div>
              {pathname !== '/success' && <p className={styles.delete}>
                <DeleteIcon color="primary" onClick={openModal} />
              </p>}
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
