import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './Loading.module.css';

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