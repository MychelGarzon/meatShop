import styles from './minusPlusButton.module.css';

interface Props {
  id: string;
  onClick?: (id: string) => void;
}

const PlusButton: React.FC<Props> = ({ id, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <button
      className={`${styles.minusPlusButton} ${styles.plusButton}`} 
      onClick={handleClick}
    >
      +
    </button>
  );
}

export default PlusButton;
