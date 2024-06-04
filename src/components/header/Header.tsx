import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/LogoAlCorte.svg'
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'
import { useAppSelector } from '../../hooks/useAppDispatch';

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const cart = useAppSelector(state => state.cart.cart)

  return (
    <Box className={styles.headerBox} sx={{ flexGrow: 1, width: '100vw' }}>
      <AppBar className={styles.appBar} position="absolute" sx={{ backgroundColor: '#000000' }}>

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            <Link to="/">
              <img src={logo} alt="Logo" style={{ height: '40px', width: '145px', marginTop: '8px' }} />
            </Link>
          </Typography>

          {(pathname !== '/success') && <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit">
              <ShoppingCartIcon sx={{ height: 24, width: 24 }} />
              {cart.length !== 0 && <div className={styles.cartAmount}>{cart.length}</div>}
            </Button>
          </Link>}
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Header;
