import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    name: "ادریس سانیان",
    role: "تریدر",
    comment:
      "یکی از بهترین سرویس‌های پراپ. پنل کاربرپسند و جذاب باعث شده به این حوزه علاقه بیشتری پیدا کنم",
    image: "/Photos/3.png",
    highlight: "یکی از بهترین سرویس‌های پراپ",
  },
  {
    name: "محمدرضا رضایی",
    role: "تریدر",
    comment: "با وجود سرمایه گذار خارجی از حفظ سرمایه خودم اطمینان دارم",
    image: "/Photos/2.png",
    highlight: "پراپ معتبر",
  },
  {
    name: "کیان مهری",
    role: "تریدر",
    comment: "اینکه امکان تجربه ترید بدون سرمایه اولیه فراهم شده خیلی خوشحالم",
    image: "/Photos/1.png",
    highlight: "ترید بدون ریسک",
  },
];

const TestimonialSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box py={6} px={isSmall ? 2 : 3} dir="rtl">
      <Grid
        container
        spacing={isSmall ? 4 : 5}
        justifyContent="center"
        alignItems="stretch"
      >
        {testimonials.map((t, index) => (
          <Grid
            mb={3}
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Paper
              sx={{
                mt: 1,
                width: "100%",
                maxWidth: 250,
                height: "100%",
                backgroundColor: "#1F2029",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                px: 5,
                py: 0.5,
              }}
              elevation={0}
            >
              <Avatar
                src={t.image}
                alt={t.name}
                sx={{ width: 64, height: 64, mt: -4 }}
              />
              <Typography fontWeight="bold" textAlign="center">
                {t.name}
              </Typography>
              <Typography color="#aaa" fontSize={14} textAlign="center">
                {t.role}
              </Typography>

              <Box
                bgcolor="#121212"
                color="#fff"
                px={2}
                py={1}
                mt={1}
                borderRadius={2}
                width="100%"
              >
                <Typography fontWeight="bold" mb={0.5}>
                  {t.highlight}
                </Typography>
                <Typography fontSize={14}>{t.comment}</Typography>
              </Box>

              <Box display="flex" gap={0.5} mt={3}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    icon="noto:star"
                    color="#FFC700"
                    style={{ fontSize: 20 }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
