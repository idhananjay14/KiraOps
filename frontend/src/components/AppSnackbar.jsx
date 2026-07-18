import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

export default function AppSnackbar({
  open,
  message,
  severity,
  onClose,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        mt: 2,
        mr: 2,
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        icon={
          severity === "success" ? (
            <CheckCircleRoundedIcon />
          ) : (
            <ErrorRoundedIcon />
          )
        }
        sx={{
          minWidth: 360,
          borderRadius: "14px",
          fontSize: "0.95rem",
          fontWeight: 500,
          boxShadow: "0 12px 35px rgba(0,0,0,0.18)",
          alignItems: "center",

          "& .MuiAlert-icon": {
            fontSize: 24,
            opacity: 1,
          },

          ...(severity === "success" && {
            bgcolor: "#1E7A52",
            color: "#fff",
          }),

          ...(severity === "error" && {
            bgcolor: "#B42318",
            color: "#fff",
          }),
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}