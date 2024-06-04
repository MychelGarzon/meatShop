import { Link, useLocation } from 'react-router-dom'

import styles from './ShoppingCart.module.css'
import { Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import Cart from '../../components/cart/Cart'
import CartForm from '../../components/cartForm/CartForm'

const ShoppingCart: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className={`${styles['shopping-cart']} ${(pathname === '/success') ? styles.bg : ''}`}>
            {pathname !== '/success' && <div className={`${styles.cols} ${styles['back-btn']}`}>
                <Link to="/">
                    <Button color='primary'>
                        {<ArrowBackIosIcon fontSize='inherit' />} REGRESAR A PRODUCTOS
                    </Button>
                </Link>
            </div>}
            <div className={`${styles.cols}`}>
                <div className={`${styles.col} ${styles['left-col']}`}>
                    <Cart />
                </div>
                <div className={`${styles.col} ${styles['right-col']}`}>
                    <CartForm />
                </div>
            </div >
        </div >
    )
}

export default ShoppingCart