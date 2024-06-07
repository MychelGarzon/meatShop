import { useAppSelector } from '../../hooks/useAppDispatch';
import styles from './minusPlusButton.module.css';


interface Props {
 id?: string;
 onClick?: () => void;
}


const MinusButton: React.FC<Props> = ({ id, onClick }) => {
 const cart = useAppSelector((state) => state.cart.cart);


 // find object by id
 const objById = cart.find((item) => item.id === id);


// handleclick
 const handleClick = () => {
   if (onClick) {
     onClick();
   }
 };


 return (
   <button
     className={`${styles.minusPlusButton} ${styles.minusButton}`}
     disabled={objById?.amount === 0 || objById?.amount === undefined}
     onClick={handleClick}
   >
     -
   </button>
 );
}


export default MinusButton;