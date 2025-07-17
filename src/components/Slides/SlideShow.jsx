"use client"

import { useState } from "react"
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material"
import { Icon } from "@iconify/react"
import Slide1 from "./Slide1"
import Slide2 from "./Slide2"
import Slide3 from "./Slide3"
import Slide4 from "./Slide4"
import Slide5 from "./Slide5"
import Slide6 from "./Slide6"

const slides = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />,
  <Slide4 />,
  <Slide5 />,
  <Slide6 />,
]

const SlideShadow = () => {
  const [current, setCurrent] = useState(0)

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length)
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <Box
      display={isSmall ? "block" : isMedium? 'block' : "flex"}
      width={isSmall ? "90%" : "80%"}
      m={isSmall? 0 : isMedium? 0 : 'auto'}
      my={8}
      sx={{ gap: isSmall ? 1 : 0 }}
    >
      <Box
        flex={isSmall ? "unset" : 1}
        display="flex"
        justifyContent="center"
        width={isSmall ? "100%" : isMedium?  "100%" : '28%'}
        bgcolor="#1F2029CC"
        px={isSmall ? 2 : 2}
        py={isSmall ? 3 : 5}
        mx={isSmall ? 0 : 4}
        mb={isSmall ? 3 : 0}
        borderRadius={4}
        borderTop={2}
        borderRight={1}
        borderLeft={1}
        borderColor="rgba(0, 172, 95, 0.8)"
      >
        <img
          src="/images/changecoin.png"
          alt={`slide${current + 1}`}
          style={{
            width: isSmall ? "150px" : 190,
            height: isSmall ? "160px" : 200,
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          p: isSmall ? 2 : 4,
          borderRadius: 3,
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
          direction: "rtl",
          display: "flex",
        }}
      >
        <Box flex={1} mx={isSmall ? 0 : 2} mb={5} width="100%">
          {slides[current]}
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          flexWrap={isSmall ? "wrap" : "nowrap"}
          gap={isSmall ? 1 : 0}
        >
          <IconButton
            onClick={handlePrev}
            sx={{ color: "#fff", border: "1px solid #555" }}
            size={isSmall ? "small" : "medium"}
          >
            <Icon icon="solar:arrow-right-linear" />
          </IconButton>

          <Box
            display="flex"
            justifyContent="center"
            mt={3}
            gap={1}
            flexGrow={1}
          >
            {slides.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: i === current ? "#fff" : "#555",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{ color: "#fff", border: "1px solid #555" }}
            size={isSmall ? "small" : "medium"}
          >
            <Icon icon="solar:arrow-left-linear" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default SlideShadow
