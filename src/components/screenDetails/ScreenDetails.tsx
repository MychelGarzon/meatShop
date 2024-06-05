import React from 'react';
import { Typography, IconButton, CardContent, CardMedia, Box, useMediaQuery } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Product } from "../../data/data";
import styles from './screenDetails.module.css';
import MinusButton from '../minusPlusButton/MinusButton';
import PlusButton from '../minusPlusButton/PlusButton';
import { formatPrice } from '../../helpers/formatPrice';

interface ScreenDetailsProps {
    product: Product;
    handleClose: () => void;
    quantity: number;
    handleQuantity: (action: string) => void;
}

const ScreenDetails: React.FC<ScreenDetailsProps> = ({ product, handleClose, quantity, handleQuantity }) => {
    const isMobile = useMediaQuery('(max-width:833px)');

    return (
        <div className={styles.overlayScreenDetails}>
            <Box className={styles.screenDetails} style={{ flexDirection: isMobile ? 'column' : 'row' }}>
                {isMobile ? (
                    <>
                        <Typography variant="h6" className={styles.type}>{product.type}</Typography>
                        <Typography variant="h4" className={styles.nameProduct}>{product.name}</Typography>
                        <CardMedia
                            component="img"
                            image={product.image}
                            alt={product.name}
                            className={styles.productImage}
                        />
                    </>
                ) : (
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        className={styles.productImage}
                    />
                )}
                <CardContent className={styles.cardContent}>
                    {!isMobile && (
                        <>
                            <Typography variant="h6" className={styles.type}>{product.type}</Typography>
                            <Typography variant="h4" className={styles.nameProduct}>{product.name}</Typography>
                        </>
                    )}
                    <Typography variant="body1" className={styles.cardDetails}>{product.description}</Typography>
                    <Typography variant="h4" className={styles.priceInfo}>{formatPrice(product.price)}</Typography>
                    <Typography variant="body2">{`Precio por ${product.unit}`}</Typography>
                    <Box className={styles.quantityBoxDetails}>
                        <Box className={styles.minusButton}>
                            <div role="button" onClick={(e) => { e.stopPropagation(); handleQuantity('subtract'); }}>
                                <MinusButton id={product.id} />
                            </div>
                        </Box>
                        <Box className={styles.quantity}>
                            <Typography variant="body1">{quantity}</Typography>
                        </Box>
                        <Box className={styles.plusButton}>
                            <div role="button" onClick={(e) => { e.stopPropagation(); handleQuantity('add'); }}>
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