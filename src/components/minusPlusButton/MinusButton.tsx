import SpeedDial from "@mui/material/SpeedDial";
import RemoveIcon from "@mui/icons-material/Remove";

function MinusButton() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
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
  );
}

export default MinusButton;