import React from 'react';
import { Typography, IconButton, CardContent, CardMedia, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Products } from "../../data/data";
import styles from './screenDetails.module.css';
import MinusButton from '../minusPlusButton/MinusButton';
import PlusButton from '../minusPlusButton/PlusButton';

interface ScreenDetailsProps {
    product: Products;
    handleClose: () => void;
    quantity: number;
    handleQuantity: (action: string) => void;
}

const ScreenDetails: React.FC<ScreenDetailsProps> = ({ product, handleClose, quantity, handleQuantity }) => {
    return (
        <div className={styles.overlayScreenDetails}>
            <Box className={styles.screenDetails}>
                <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    className={styles.productImage}
                />
                <CardContent className={styles.cardDetails}>
                    <Typography className={styles.type}>{product.type}</Typography>
                    <Typography className={styles.nameProduct}>{product.name}</Typography>
                    <Typography variant="body1">{product.description}</Typography>
                    <Typography className={styles.priceInfo}>{`$ ${product.price}`}</Typography>
                    <Typography variant="body1">{`Precio por ${product.unit}`}</Typography>
                    <Box className={styles.quantityBoxDetails}>
                        <Box className={styles.minusButton}>
                            <div onClick={(e) => { e.stopPropagation(); handleQuantity('subtract'); }}>
                                <MinusButton id={product.id} />

                            </div>
                        </Box>
                        <Box className={styles.quantity}>
                            <Typography>{quantity}</Typography>
                        </Box>
                        <Box className={styles.plusButton}>
                            <div onClick={(e) => { e.stopPropagation(); handleQuantity('add'); }}>
                                <PlusButton />
                            </div>
                        </Box>
                    </Box>
                </CardContent>
                <Box className={styles.closeIconBox}>
                    <IconButton color="inherit" size="medium" onClick={handleClose} className={styles.closeIcon}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
};

export default ScreenDetails;
