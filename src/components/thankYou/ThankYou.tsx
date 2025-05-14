import { useAppSelector } from '../../hooks/useAppDispatch';
import styles from './ThankYou.module.css';

const ThankYou: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className={styles['thank-you']}>
      <h2 className={styles.title}>¡Gracias {user.name}, por realizar tu pedido con nosotros!</h2>
      <p className={styles.text}>En un momento nuestro equipo de ventas se comunicará contigo para coordinar el envío de tus productos.</p>
      <p className={styles.text}>Puedes hacer el pago de tu pedido a nuestro Nequi al 3124199896 o contraentrega</p>
    </div>
  );
}

export default ThankYou;