import { Box } from "@mui/material"

const ContentWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "95%",
            sm: "700px",
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
  )
}

export default ContentWrapper
