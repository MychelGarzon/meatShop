import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

function PlusButton() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", right: "2.5rem", bottom: "1rem" }}
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
