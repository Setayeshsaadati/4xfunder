import { Icon } from "@iconify/react"
import { Box, Button } from "@mui/material"

const LeftSide = () => {
  return (
    <Box display="flex">
      <Box
        display="flex"
        sx={{
          ml: { xs: 2, sm: 4, md: 2 },
          mt: { xs: 1, sm: 2, md: 1 },
        }}
      >
        <Box
          sx={{
            mr: { xs: 1, sm: 50, md: 1 },
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
            sx={{
              "&:hover": {
                fontSize: 32,
                transition: "font-size 0.3s ease-in-out",
              },
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
          <Icon
            icon="solar:magnifer-outline"
            fontSize={25}
            sx={{
              "&:hover": {
                fontSize: 29,
                transition: "font-size 0.3s ease-in-out",
              },
            }}
          />
        </Box>
      </Box>

      <Button
        variant="contained"
        color="white"
        sx={{
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
