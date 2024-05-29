import { useState } from 'react';
import styles from './CartItem.module.css';
import DeleteIcon from '@mui/icons-material/Delete';

import MinusButton from '../minusPlusButton/MinusButton';
import PlusButton from '../minusPlusButton/PlusButton';

interface Props {
  index: number
  item: {
    id: string
    image: string
    type: string
    name: string
    price: number
  }
  amount: number
}

const CartItem: React.FC<Props> = ({ index, item, amount }) => {
  const [quantity, setQuantity] = useState<number>(amount)

  // add a zero to the number if it is less than 10
  const formatNumber = (number: number): string => {
    if (number < 10) return `0${number}`
    return `${number}`;
  }

  // format the price to the colombian currency
  const formatPrice = (price: number): string => {
    return price.toLocaleString('es-CO', {
      style: 'currency', currency: 'COP',
      minimumFractionDigits: 0
    });
  }

  // handle the quantity of the product
  const handleQuantity = (action: string) => () => {
    if (action === 'add') return setQuantity((prevQuantity) => prevQuantity + 1)
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1)
  }

  // handle the delete of the product
  const handleDelete = (id: string) => {
    console.log('delete', id)
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles.flex}>
        <p className={styles['line-number']}>{formatNumber(index + 1)}</p>
        <div className={styles.product}>
          <img src={item.image} width="88px" height="88px" alt="product" />
          <p className={styles.type}>{item.type}</p>
          <p className={styles.name}>{item.name}</p>
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
        <p className={styles.delete}>{<DeleteIcon color='primary' onClick={() => handleDelete(item.id)} />}</p>
      </div>
    </div>
  )
}

export default CartItem;