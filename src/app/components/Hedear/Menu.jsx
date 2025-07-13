import { Box, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Box
      display="flex"
      sx={{ textAlign: "center", mr: { xs: 2, sm: 4, md: -20 } }}
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
          mr: 8,
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
          mr: 8,
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
          mr: 8,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        وبلاگ
      </Typography>
    </Box>
  );
};

export default Menu;
