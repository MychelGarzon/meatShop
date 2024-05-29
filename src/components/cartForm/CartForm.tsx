import styles from './CartForm.module.css';

interface FormData {
  name: string;
  city: string;
  address: string;
  neighborhood: string;
  town: string;
  phone: string;
  email: string;
  message?: string;
}

const CartForm: React.FC = () => {
  const formData: FormData[] = [];

  console.log(formData)

  return <div className={styles['cart-form']}>
    <div className={styles['total-container']}>
      <div className={styles.title}>
        <p>Resumen de la compra</p>
      </div>
      <div className={styles.flex}>
        <p>Subtotal</p>
        <p>$ 120.000</p>
      </div>
      <div className={styles.flex}>
        <p>IVA</p>
        <p>$ 0</p>
      </div>
      <div className={`${styles.flex} ${styles.line}`}>
        <p>Envío</p>
        <p>Por definir</p>
      </div>
      <div className={`${styles.flex} ${styles.total}`}>
        <p>Total</p>
        <p>$ 120.000</p>
      </div>
    </div>

    <p className={styles.title}>Tus datos para la orden</p>
    <small className={styles.light}>* Campo obligatorio</small>

    <form>

    </form>

    <div className={styles['info-text']}>
      <p className={styles.light}>Luego de enviar tu orden nuestro equipo de logística se comunicará contigo para definir la fecha de envío de los productos y el método de pago.</p>
    </div>
  </div>
}

export default CartForm;
