import { Box, Typography, Divider } from "@mui/material";
import styles from './privacy.module.css';

const Privacy = () => {
    return (
        <Box
            className={styles.privacyBox}
            sx={{
                padding: "24px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                lineHeight: "1.8",
                color: "#555",
            }}
        >
            <Typography
                variant="h4"
                className={styles.privacyTitle}
                sx={{
                    textAlign: "center",
                    marginBottom: "16px",
                    fontWeight: "bold",
                    color: "#333",
                }}
            >
                Política de Privacidad
            </Typography>
            <Divider sx={{ marginBottom: "24px", backgroundColor: "#ccc" }} />
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    1. Introducción
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Tu privacidad es importante para nosotros. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestros servicios.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    2. Información que Recopilamos
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Podemos recopilar los siguientes tipos de información: <br />
                    - <strong>Información personal:</strong> Nombre, correo electrónico, número de teléfono, dirección de entrega. <br />
                    - <strong>Información técnica:</strong> Dirección IP, tipo de dispositivo, sistema operativo, navegador. <br />
                    - <strong>Datos de uso:</strong> Información sobre cómo interactúas con nuestra plataforma.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    3. Uso de la Información
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Utilizamos tu información para los siguientes fines: <br />
                    - Procesar y entregar pedidos. <br />
                    - Proporcionar soporte al cliente. <br />
                    - Enviar comunicaciones relacionadas con tus pedidos o actualizaciones de servicio. <br />
                    - Mejorar nuestra plataforma y personalizar tu experiencia. <br />
                    - Cumplir con requisitos legales y normativos.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    4. Seguridad de la Información
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Tomamos medidas razonables para proteger tu información personal, incluyendo el uso de cifrado, firewalls y controles de acceso. Sin embargo, ningún método de transmisión o almacenamiento es completamente seguro.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    5. Cambios en la Política de Privacidad
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Nos reservamos el derecho de modificar esta política en cualquier momento. Te notificaremos sobre cambios significativos mediante correo electrónico o publicando un aviso en nuestra plataforma.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    6. Contacto
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "16px" }}>
                    Si tienes preguntas sobre esta Política de Privacidad, puedes comunicarte con nosotros: <br />
                    <strong>Nombre de la Empresa:</strong> [Nombre de la Empresa] <br />
                    <strong>Correo Electrónico:</strong> [correo@example.com] <br />
                    <strong>Teléfono:</strong> [número de teléfono]
                </Typography>
            </Box>
        </Box>
    );
};

export default Privacy;
