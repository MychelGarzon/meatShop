import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

function PlusButton() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
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
  );
}

export default PlusButton;
