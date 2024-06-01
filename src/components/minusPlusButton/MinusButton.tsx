import styles from './minusPlusButton.module.css';

function MinusButton() {
  return (
    <button
      className={`${styles.minusPlusButton} ${styles.minusButton}`} /* disabled */>
      -
    </button>
  );
}

export default MinusButton;