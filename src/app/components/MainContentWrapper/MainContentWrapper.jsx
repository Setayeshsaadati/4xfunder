import { Box } from "@mui/material";

const MainContentWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "90%",
            sm: "800px",
            md: "850px",
            lg: "1200px",
          },
          mx: "auto",
          boxSizing: "border-box",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainContentWrapper;
