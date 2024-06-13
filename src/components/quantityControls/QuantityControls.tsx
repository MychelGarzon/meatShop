import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import MinusButton from "../minusPlusButton/MinusButton";
import PlusButton from "../minusPlusButton/PlusButton";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './quantityControls.module.css';

interface QuantityControlsProps {
    id: string;
    quantity: number;
    unit: string;
    handleQuantity: (action: string) => void;
    isScreenDetailsOpen?: boolean;
}

const QuantityControls: React.FC<QuantityControlsProps> = ({ id, quantity, unit, handleQuantity, isScreenDetailsOpen }) => {
    return (
        <Box className={styles.quantityBox}>
            {quantity === 0 ? (
                <Button
                    variant="contained"
                    className={`${styles.addToCartButton} ${isScreenDetailsOpen ? styles.screenDetailsBorder : ''}`}
                    size="large"
                    onClick={(e) => { e.stopPropagation(); handleQuantity('add'); }}>
                    <ShoppingCart className={styles.addToCartIcon} />
                    Agregar
                </Button>
            ) : (
                <Box className={styles.quantityControls}>
                    {quantity > 1 ? (
                        <div role="button" onClick={(e) => { e.stopPropagation(); handleQuantity('subtract'); }}>
                            <MinusButton id={id} />
                        </div>
                    ) : (
                        <div role="button" onClick={(e) => { e.stopPropagation(); handleQuantity('subtract'); }}>
                            <DeleteIcon className={styles.deleteIcon} />
                        </div>
                    )}
                    <Typography variant="h6" className={styles.quantity}>
                        {quantity} {unit === "Paquete" ? "agregado(s)" : "agregada(s)"}
                    </Typography>
                    <div role="button" onClick={(e) => { e.stopPropagation(); handleQuantity('add'); }}>
                        <PlusButton id={id} />
                    </div>
                </Box>
            )}
        </Box>
    );
};

export default QuantityControls;