import { Box } from "@mui/material";

const MainContentWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "95%",
        maxWidth: {
          xs: "95%",
          sm: "600px",
          md: "900px",
          lg: "1200px",
          xl: "1400px",
        },
        margin: "0 auto",
        boxSizing: "border-box",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContentWrapper;
