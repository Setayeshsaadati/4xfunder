"use client"

import { Icon } from "@iconify/react"
import { Box, Button } from "@mui/material"

const LeftSide = () => {
  return (
    <Box
      display="flex"
      alignItems='flex-end'
      justifyContent='left'
      sx={{
        width: "100%",
        px: { xs: 2, sm: 3, md: 4 },
        mt: { xs: 1, sm: 2, md: 1 },
      }}
    >
      <Box display="flex" >
        <Box
          sx={{
            ml: { xs: 1, md: 1 },
            cursor: "pointer",
            "&:hover": {
              fontSize: 20,
              transition: "font-size 0.3s ease-in-out",
            },
          }}
        >
          <Icon
            icon="streamline-emojis:iran"
            fontSize={28}
            style={{
              borderLeft: "1px solid white",
              marginLeft: 20,
              paddingLeft: 15,
            }}
          />
        </Box>

        <Box
          sx={{
            cursor: "pointer",
            "&:hover": {
              fontSize: 20,
              transition: "font-size 0.3s ease-in-out",
            },
          }}
        >
          <Icon icon="solar:magnifer-outline" fontSize={25} />
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          mr: 2,
          px: 2,
          py: 1,
          bgcolor: "#00cc99",
          borderRadius: 2.5,
          fontSize: 18,
        }}
      >
        پنل کاربری
        <Icon
          icon="akar-icons:arrow-back"
          width="24"
          height="24"
          style={{ marginRight: 10 }}
        />
      </Button>
    </Box>
  )
}

export default LeftSide
