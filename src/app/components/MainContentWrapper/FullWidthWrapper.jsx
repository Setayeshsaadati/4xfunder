import { Box } from "@mui/material"

const FullWidthWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {children}
    </Box>
  )
}

export default FullWidthWrapper
