import { Box, Typography, Divider } from "@mui/material";
import styles from './termsAndConditions.module.css';

const TermsAndConditions = () => {
    return (
        <Box className={styles.termsBox} sx={{ padding: "24px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}>
            <Typography variant="h4" className={styles.termsTitle} sx={{ textAlign: "center", marginBottom: "16px", fontWeight: "bold", color: "#333" }}>
                Términos y Condiciones
            </Typography>
            <Divider sx={{ marginBottom: "24px", backgroundColor: "#ccc" }} />
            <Box sx={{ lineHeight: "1.8", color: "#555" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    1. Generalidades
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Al utilizar nuestros servicios, aceptas los presentes términos y condiciones. Te recomendamos leerlos cuidadosamente antes de realizar tu pedido.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    2. Pedidos
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    - Los pedidos se realizan a través de nuestra página web, aplicación o contacto directo. <br />
                    - Es responsabilidad del cliente proporcionar información exacta y completa para la entrega. <br />
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    3. Pagos
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    - Los pagos deben realizarse a través de los métodos habilitados. <br />
                    - Todos los precios incluyen impuestos aplicables.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    4. Política de Cancelaciones y Reembolsos
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    - Los pedidos cancelados con al menos 24 horas de antelación serán elegibles para reembolso completo. <br />
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    5. Entrega
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    - Garantizamos la entrega dentro del horario acordado, sujeto a condiciones externas como clima o tráfico. <br />
                    - En caso de no estar disponible en el momento de la entrega.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    6. Responsabilidad
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    No nos hacemos responsables por: <br />
                    - Daños derivados de un uso incorrecto de nuestros productos. <br />
                    - Retrasos ocasionados por factores fuera de nuestro control.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    7. Privacidad
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Tu información personal será utilizada únicamente para procesar pedidos y cumplir con nuestra política de privacidad.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    8. Modificaciones
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "50px" }}>
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán publicados en nuestra página web y entrarán en vigor de inmediato.
                </Typography>
            </Box>
        </Box>
    );
};

export default TermsAndConditions;
