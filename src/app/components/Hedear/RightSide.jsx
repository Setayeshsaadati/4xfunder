import { Box } from "@mui/material"
import Image from "next/image"

const RightSide = () => {
  return (
    <Box sx={{ mr: { xs: 2, sm: 4 , md: -5}, py: 2, width: "100%" }}>
      <Image src={'/Photos/Logo.png'} width={47.8} height={41} alt=""></Image>
    </Box>
  )
}

export default RightSide
