import { Box, Typography } from "@mui/material";

const Step5 = () => (
  <Box sx={{ display: "flex", justifyContent: "space-between", color: "#fff" }}>
    <Box mt={7} width={"65%"}>
      <Box display={"flex"}>
        <Typography fontSize={22} fontWeight={900} color="white" mr={0.5}>
          پیشرفت به این مرحله نشان‌دهنده
        </Typography>
        <Typography fontSize={22} fontWeight={900} color="#00d285">
          تعهد و استعداد
        </Typography>
        <Typography fontSize={22} fontWeight={900} color="white" mr={0.5}>
          است...
        </Typography>
      </Box>
      <Typography fontSize={17} mt={3}>
        پیشرفت به این مرحله، تعهد و استعداد را نشان می‌دهد و به یک حساب 4XFunder با سرمایه فرضی تا سقف 1,000,000 دلار در محیط دمو منتهی می‌شود. با اینکه این حساب دمو است، معامله‌گران 4XFunder می‌توانند تا ۹۰٪ از سودهای شبیه‌سازی‌شده را بدون ریسک سرمایه خود دریافت کنند و به فرصت‌های ویژه، از جمله برنامه پریمیوم 4XFunder دسترسی داشته باشند.</Typography>
    </Box>
    <Box width={"35%"} p={5}>
      photo
    </Box>
  </Box>
);

export default Step5;
