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
  const [quantity, /* setQuantity */] = useState<number>(amount)

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
  /* const handleQuanitity = (action: string) => () => {
    if (action === 'add') {
      setQuantity((prevQuantity) => prevQuantity + 1)
    } else {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1)
      }
    }
  } */

  // handle the delete of the product
  const handleDelete = (id: string) => {
    console.log('delete', id)
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles.flex}>
        <p>{formatNumber(index + 1)}</p>
        <div className={styles.product}>
          <img src={item.image} width="100px" height="100px" alt="product" />
          <p><b>{item.type}</b></p>
          <p>{item.name}</p>
        </div>
      </div>
      <div className={styles.flex3}>
        <MinusButton />
        <p>{quantity}</p>
        <PlusButton />
      </div>
      <div className={styles.flex2}>
        <p>{formatPrice(item.price)}</p>
        <p>{<DeleteIcon color='primary' onClick={() => handleDelete(item.id)} />}</p>
      </div>
    </div>
  )
}

export default CartItem;