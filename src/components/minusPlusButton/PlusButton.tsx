import SpeedDial from "@mui/material/SpeedDial";
import AddIcon from '@mui/icons-material/Add';
function PlusButton() {
  return (
    <SpeedDial
    ariaLabel="SpeedDial basic example"
    icon={<AddIcon sx={{color:"text.secondary"}} />}
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
