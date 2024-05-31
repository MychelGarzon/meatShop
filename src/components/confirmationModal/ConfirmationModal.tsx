import React from "react";
import styles from "./confirmationModal.module.css";
import Typography from "@mui/material/Typography";
import { Button, Paper } from "@mui/material";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

const ConfirmationModal: React.FC<Props> = ({
  onConfirm,
  onCancel,
  message,
}) => {
  return (
    <div className={styles.overlay}>
      <Paper elevation={16} className={styles.modal} onClick={onCancel}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <Typography variant="h6">{message}</Typography>
          <div className={styles.buttons}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              id="yesButton"
              onClick={onCancel}
            >
              no, quiero conservarlo
            </Button>
            <Button
              variant="text"
              color="primary"
              size="small"
              id="noButton"
              onClick={onConfirm}
            >
              sí, eliminar
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ConfirmationModal;
