import { Box, Typography, Divider } from "@mui/material";
import styles from './about.module.css';

const About = () => {
    return (
        <Box
            className={styles.aboutBox}
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
                className={styles.aboutTitle}
                sx={{
                    textAlign: "center",
                    marginBottom: "16px",
                    fontWeight: "bold",
                    color: "#333",
                }}
            >
                Sobre Nosotros
            </Typography>
            <Divider sx={{ marginBottom: "24px", backgroundColor: "#ccc" }} />
            <Box
                sx={{
                    fontSize: "1rem",
                    color: "#555",
                    lineHeight: "1.8",
                }}
            >
                Bienvenido a <strong>Alcorte</strong>. Somos una empresa dedicada a ofrecer 
                productos y servicios de alta calidad. Nuestra misión es brindar experiencias 
                memorables a nuestros clientes a través de innovación, excelencia y atención personalizada. 
                <br />
                <br />
                Con un equipo comprometido y años de experiencia, trabajamos día a día para asegurar 
                que nuestros productos y servicios superen tus expectativas. Nos enorgullece ser una 
                parte fundamental de los momentos importantes en tu vida.
                <br />
                <br />
                Gracias por elegir <strong>Alcorte</strong>. Estamos aquí para hacer de cada experiencia algo único 
                e inolvidable.
            </Box>
        </Box>
    );
};

export default About;
