import React from "react";
import { Box, Typography, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import backgroundNavidad from "../assets/backgroundNavidad.png";

const ComboInstructions: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        height: "100%",
        width: "100%",
        maxWidth: "1280px",
        padding: "3rem",
        marginTop: "48px",
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 20%),
          linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 20%),
          url(${backgroundNavidad})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        margin: isMobile ? "0 50px" : "0", // Conditional margin
        
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          fontSize: "40px",
          fontFamily: "Garamond, serif",
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        Crea tu ancheta personalizada de carnes
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          fontSize: "20px",
          fontFamily: "Roboto, sans-serif",
          marginBottom: "2rem",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
          lineHeight: "1.5",
        }}
      >
        Escoge dos proteínas de tu gusto y estará acompañada con los siguientes productos:
      </Typography>

      {/* Grid Section */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        sx={{
          maxWidth: "938px", // Desktop fixed size
          width: "100%",
          marginRight: { md: "170px", xs: "0" }, // Adjust margin for mobile
          columnGap: { md: "46px", xs: "24px" }, // Responsive gaps
          "@media (max-width: 1024px)": {
            flexWrap: "wrap", // Enable wrapping for smaller screens
            justifyContent: "center", // Center items when wrapping
          },
        }}
      >
        {/* Item 1 */}
        <Grid item sx={{ flexBasis: "200px", flexShrink: 0 }}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "165px",
              background: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "1rem",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              marginBottom: { xs: "10px" }, // Add 3px spacing for mobile

              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              750 gramos
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, fontSize: "20px" }}
            >
            de cada una de las dos proteínas de tu gusto
           
            </Typography>
          </Paper>
        </Grid>

        {/* Item 2 */}
        <Grid item sx={{ flexBasis: "200px", flexShrink: 0 }}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "165px",
              background: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "1rem",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              marginBottom: { xs: "10px" }, // Add 3px spacing for mobile

              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              5
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, fontSize: "20px" }}
            >
              Arepas
            </Typography>
          </Paper>
        </Grid>

        {/* Item 3 */}
        <Grid item sx={{ flexBasis: "200px", flexShrink: 0 }}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "165px",
              background: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "1rem",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              marginBottom: { xs: "10px" }, 
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              5
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, fontSize: "20px" }}
            >
              Chorizos
            </Typography>
          </Paper>
        </Grid>

        {/* Item 4 */}
        <Grid item sx={{ flexBasis: "200px", flexShrink: 0 }}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "165px",
              background: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "1rem",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              marginBottom: { xs: "10px" }, // Add 3px spacing for mobile
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              5
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, fontSize: "20px" }}
            >
              Rellenas
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 400,
          fontSize: "20px",
          fontFamily: "Roboto, sans-serif",
          marginTop: "2rem",
          lineHeight: "1.5",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
        }}
      >
        Puedes escoger diferentes tipos de carne como Punta de Anca, Lomo de Res, Costilla de Cerdo,
        Pollo, Bondiola, entre otros.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          marginTop: "1rem",
          fontWeight: 600,
          fontSize: "24px",
          fontFamily: "Roboto, sans-serif",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      >
        ¡Disfruta estas navidades con un combo personalizado perfecto para compartir en familia o con amigos!
      </Typography>
    </Box>
  );
};

export default ComboInstructions;
