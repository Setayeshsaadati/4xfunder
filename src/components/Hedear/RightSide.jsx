"use client"

import { Box } from "@mui/material"
import Image from "next/image"

const RightSide = () => {
  return (
    <Box
      sx={{
        justifyContent: "flex-start",
      }}
    >
      <Image src={"/images/Logo.png"} width={47.8} height={41} alt="" />
    </Box>
  )
}

export default RightSide
