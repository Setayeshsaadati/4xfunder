import { Box, Typography } from "@mui/material"

const Menu = () => {
  return (
    <Box
    mt={3}
      display="flex"
      justifyContent={'space-around'}
    >
      <Typography
        variant="body1"
        sx={{

          color: "#fff",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        صفحه اصلی
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        موفقیت
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        چالش ها
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        وبلاگ
      </Typography>
    </Box>
  )
}

export default Menu
