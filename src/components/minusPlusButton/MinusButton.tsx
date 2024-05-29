import SpeedDial from "@mui/material/SpeedDial";
import RemoveIcon from "@mui/icons-material/Remove";

function MinusButton() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", right: "7rem", bottom: "1rem" }}
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