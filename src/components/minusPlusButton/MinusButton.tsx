import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import RemoveIcon from "@mui/icons-material/Remove";

function MinusButton() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute" }}
        icon={<RemoveIcon sx={{ color: "text.secondary" }} />}
        FabProps={{
          sx: {
            bgcolor: "inherit",
            "&:hover": {
              bgcolor: "inherit",
            },
          },
        }}
      ></SpeedDial>
    </Box>
  );
}

export default MinusButton;