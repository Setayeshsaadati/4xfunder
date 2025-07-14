import { Box } from "@mui/material";

const ContentWrapper = ({ children }) => {
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
            lg: "79%",
          },
          mx: "auto",
          boxSizing: "border-box",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ContentWrapper;
