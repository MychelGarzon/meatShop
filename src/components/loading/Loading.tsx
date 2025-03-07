import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './Loading.module.css';

// show loading spinner while the page is loading
export default function CircularIndeterminate() {
  return (
    <>
      <h2 className={styles.loading}>Loading...</h2>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    </>
  );
}