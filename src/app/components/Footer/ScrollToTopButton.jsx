"use client"

import { Box, useMediaQuery, useTheme } from "@mui/material"
import { Icon } from "@iconify/react"

const ScrollToTopButton = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Box
      width="100%" 
      display="flex"
      justifyContent={isSmall ? "center" : "end"} 
      mb={2}
    >
      <Box
        bgcolor="#00CC99"
        height={30}
        p={1.5}
        borderRadius={2}
        sx={{ cursor: "pointer" }}
        onClick={scrollToTop}
      >
        <Icon icon="solar:arrow-up-outline" fontSize={30} />
      </Box>
    </Box>
  )
}

export default ScrollToTopButton
