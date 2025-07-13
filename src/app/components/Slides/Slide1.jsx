import { Box, Typography } from "@mui/material";

const Slide1 = () => {
  return (
    <Box
    width={"100%"}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
      <Box flex={1} textAlign={{ xs: "center", md: "cneter" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: { xs: 18, md: 22 } }}
        >
          <span style={{ color: "#00CC99" }}>آزادی در حجم معاملات</span>; بدون
          ریسک شناور
        </Typography>
        <Typography mt={2} color="white" sx={{ fontSize: { xs: 14, md: 16 } }}>
          با حذف ریسک شناور در 4XFunder، شما میتوانید استراتژی‌های معاملاتی خود
          را بدون محدودیت حجمی اجرا کنید. این یعنی آزادی عمل بیشتر، کنترل کامل
          بر تصمیمات و عملکرد واقعی بدون مداخله محدودیت‌های مصنوعی. تنها در
          حساب‌های ریال بالای ۱۰۰ هزار دلار، سقف منطقی ۲٪ اعمال میشود.
        </Typography>
      </Box>
    </Box>
  );
};

export default Slide1;
