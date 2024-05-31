import styles from './minusPlusButton.module.css';

function MinusButton() {
  return (
    <button
      className={`${styles.minusPlusButton} ${styles.minusButton}`}>
      -
    </button>
  );
}

export default MinusButton;