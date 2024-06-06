import { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import styles from './CartForm.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { setUser } from '../../store/userSlice';
import { formatPrice } from '../../helpers/formatPrice';
import { useLocation, useNavigate } from 'react-router';
import { Product } from '../../data/data';
import { setCart } from '../../store/cartSlice';
import axios from 'axios';

interface FormData {
  name: string;
  city: string;
  address: string;
  neighborhood: string;
  locality: string;
  phone: string;
  email: string;
  comments?: string;
}

const CartForm: React.FC = () => {
  const cities = ['Barrios Unidos', 'Chapinero', 'Suba', 'Teusaquillo', 'Usaquen'];
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(useAppSelector((state) => state.user.user));

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.cart);
  const total = cart.reduce((total, item) => total + (item.subtotal ? item.subtotal : 0), 0);
  const vatTotal = cart.reduce((total, item) => total + (item.itemVatTotal ? item.itemVatTotal : 0), 0);

  // validate if the form is completed (all the required fields are filled)
  const validateForm = (data: FormData) => {
    return data.name !== '' &&
      data.city !== '' &&
      data.address !== '' &&
      data.neighborhood !== '' &&
      data.locality !== '' &&
      data.phone !== '' &&
      data.email !== '';
  };

  useEffect(() => {
    setIsFormCompleted(validateForm(formData));
  }, [formData]);

  // update the state when user fills the form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // remove products with amount of 0 from the cart
  const removeZeroRows = (cart: Product[]) => {
    return cart.filter((item: Product) => item.amount && item.amount > 0);
  }

  // update user and cart states and navigate to the success page
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUser(formData))
    dispatch(setCart(removeZeroRows(cart)))
    // this is a mock of the order submission
    axios.post('https://by7lazbnj4.execute-api.sa-east-1.amazonaws.com/prod/order',
      { message: 'hello' }).catch((error) => {
        console.log(error);
      })

    console.log({ user: formData, order: removeZeroRows(cart), totalPrice: { total } })
    navigate('/success')
  };

  /* user has to fill the form and add at least one item to cart to place an order,
  user can leave products with amount of zero on the cart, but all of them can't be amount of zero*/
  const validateOrder = () => {
    return !isFormCompleted || cart.length === 0 || cart.every((item) => item.amount === 0);
  }

  return <div className={styles['cart-form']}>
    <div className={styles['total-container']}>
      {pathname !== '/success' && <div className={styles.title}>
        <p>Resumen de la compra</p>
      </div>}
      <div className={`${styles.flex} ${styles.child}`}>
        <p>Subtotal</p>
        <p>{formatPrice(total)}</p>
      </div>
      <div className={`${styles.flex} ${styles.child}`}>
        <p>IVA</p>
        <p>{formatPrice(vatTotal)}</p>
      </div>
      <div className={`${styles.flex} ${styles.line} ${styles.child}`}>
        <p>Envío</p>
        <p>Por definir</p>
      </div>
      <div className={`${styles.flex} ${styles.total} ${styles.child}`}>
        <p>Total</p>
        <p>{formatPrice(total)}</p>
      </div>
    </div>

    {pathname !== '/success' && <><p className={`${styles.title} ${styles.gap}`}>Tus datos para la orden</p>
      <small className={styles.light}>* Campo obligatorio</small>

      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          type='text'
          id="outlined-basic"
          label="Nombre"
          name="name"
          value={formData?.name}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required />
        <FormControl fullWidth>
          <InputLabel id="city" required>Ciudad</InputLabel>
          <Select
            labelId="city"
            name='city'
            value={formData?.city}
            onChange={handleChange}
            label="Ciudad "
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>{city}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          type='text'
          id="outlined-basic"
          label="Dirección"
          name="address"
          value={formData?.address}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required />
        <TextField
          type='text'
          id="outlined-basic"
          label="Barrio"
          name="neighborhood"
          value={formData?.neighborhood}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required />
        <TextField
          type='text'
          id="outlined-basic"
          label="Localidad"
          name="locality"
          value={formData?.locality}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required />
        <TextField
          type='tel'
          id="outlined-basic"
          label="Teléfono de contacto"
          name="phone"
          value={formData?.phone}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required />
        <TextField
          type='email'
          id="outlined-basic"
          label="Correo electrónico"
          name="email"
          value={formData?.email}
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required />
        <TextField
          type='text'
          id="outlined-basic"
          label="Comentarios"
          name="comments"
          value={formData?.comments}
          variant="outlined"
          fullWidth
          onChange={handleChange} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={validateOrder()}
          fullWidth>
          Enviar orden
        </Button>
      </form>

      <div className={styles['info-text']}>
        <p className={styles.light}>Luego de enviar tu orden nuestro equipo de logística se comunicará contigo para definir la fecha de envío de los productos y el método de pago.</p>
      </div>
    </>}
  </div >
}

export default CartForm;