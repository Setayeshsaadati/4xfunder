"use client"

import { Box, Typography } from "@mui/material"

const TableHeader = () => {
  return (
    <Box
      sx={{
        zIndex: 100,
        height: "10%",
        px: 15,
        py: 5,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "#272935",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        gap: 1,
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>ویژگی ها</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>Step 1</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>Step 2</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>Step 3</Typography>
    </Box>
  )
}

export default TableHeader
