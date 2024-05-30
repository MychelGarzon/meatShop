import { Link } from 'react-router-dom'

import styles from './ShoppingCart.module.css'
import { Button } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import Cart from '../../components/cart/Cart'

const ShoppingCart: React.FC = () => {
    return (
        <div className={styles['shopping-cart']}>
            <div className={`${styles.cols} ${styles['back-btn']}`}>
                <Link to="/">
                    <Button color='primary'>
                        {<ArrowBackIosIcon fontSize='inherit' />} REGRESAR A PRODUCTOS
                    </Button>
                </Link>
            </div>
            <div className={styles.cols}>
                <div className={`${styles.col} ${styles['left-col']}`}>
                    <Cart />
                </div>
                <div className={`${styles.col} ${styles['right-col']}`}><h4>Form Container</h4><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, quam officiis? Illum provident doloremque, aliquid molestias sint quam odio quis modi ea quidem a incidunt nobis cum temporibus? Velit commodi dignissimos maiores optio, officia ratione suscipit eligendi saepe, dolor quia omnis reiciendis voluptatem placeat! Expedita quos sed, velit atque quisquam dolore quod dicta esse voluptates cupiditate eos, amet beatae molestias. Ut consequuntur, sunt voluptas amet perspiciatis, quis veniam eum rem consequatur ratione veritatis suscipit assumenda ab minima iusto, consectetur adipisci? Saepe magnam, praesentium quia laudantium nostrum recusandae laboriosam obcaecati. Officia nisi veniam modi eum ipsam omnis possimus repellendus iusto culpa!</p></div>
            </div>
        </div>
    )
}

export default ShoppingCart