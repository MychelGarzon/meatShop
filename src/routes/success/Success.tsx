import ThankYou from '../../components/thankYou/ThankYou';
import styles from './Success.module.css';

const Success: React.FC = () => {
  return (
    <div className={styles.success}>
      <ThankYou />
    </div>
  )
}

export default Success;