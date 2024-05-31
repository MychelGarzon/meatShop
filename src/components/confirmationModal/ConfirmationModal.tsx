import React from 'react';
import styles from './confirmationModal.module.css';

interface Props {
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
}

const ConfirmationModal: React.FC<Props> = ({ onConfirm, onCancel, message }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onClick={onCancel}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <h1>{message}</h1>
                    <div className={styles.buttons}>
                        <button id="yesButton" onClick={onConfirm}>no, quiero conservarlo</button>
                        <button id="noButton" onClick={onCancel}>sí, eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;