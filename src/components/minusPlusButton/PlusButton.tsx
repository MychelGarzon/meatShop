import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

function PlusButton() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute"}}
        icon={<SpeedDialIcon sx={{ color: "text.secondary" }} />}
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

export default PlusButton;
