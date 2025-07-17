"use client"

import { Box, Typography } from "@mui/material"

const TableRow = ({ label, values, isLast }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center",
        height: "9%",
        px: 15,
        py: 5,
        borderBottom: isLast ? "none" : "2px solid #272935",
        gap: 0,
      }}
    >
      <Typography sx={{ minWidth: "auto", fontWeight: "bold" }}>{label}</Typography>
      {values.map((val, idx) => (
        <Typography key={idx} sx={{ minWidth: "auto" }}>
          {val || "-"}
        </Typography>
      ))}
    </Box>
  )
}

export default TableRow
