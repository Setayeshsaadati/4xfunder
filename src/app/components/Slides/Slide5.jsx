import { Box, Typography } from "@mui/material"

const Slide5 = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
      <Box flex={1} textAlign="right">
        <Typography variant="h6" fontWeight="bold">
          <span style={{ color: "#00D285" }}>آزادی در حجم معاملات</span> بدون
          ریسک شناور
        </Typography>
        <Typography mt={2} color="#ccc">
          با حذف ریسک شناور در 4XFunder، شما میتوانید استراتژی‌های معاملاتی خود
          را بدون محدودیت حجمی اجرا کنید. این یعنی آزادی عمل بیشتر، کنترل کامل
          بر تصمیمات و عملکرد واقعی بدون مداخله محدودیت‌های مصنوعی. تنها در
          حساب‌های ریال بالای ۱۰۰ هزار دلار، سقف منطقی ۲٪ اعمال میشود.
        </Typography>
      </Box>
      
    </Box>
  )
}
export default Slide5
