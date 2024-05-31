import styles from './minusPlusButton.module.css';

function PlusButton() {
  return (
    <button
      className={`${styles.minusPlusButton} ${styles.plusButton}`}>
      +
    </button>
  );
}

export default PlusButton;