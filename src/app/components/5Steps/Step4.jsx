import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const Step4 = () => (
  <Box sx={{ display: "flex", justifyContent: "space-between", color: "#fff" }}>
    <Box mt={7} width={'65%'}>
      <Box display={"flex"}>
        <Typography fontSize={22} fontWeight={900} color="#00d285">
          انتخاب آگاهانه
        </Typography>
        <Typography fontSize={22} fontWeight={900} color="white" mr={.5}>
          چالش با پشتیبانی حرفه ای
        </Typography>
      </Box>
      <Typography fontSize={17} mt={3}>
        پیش از آغاز مسیر با استفاده از حساب های تست و ارزیابی اولیه،چالش معاملاتی متناسب با سطح مهارت خود را انتخاب میکند. در این مرحله، تیم پشتیبانی ۲۴ ساعته فورایکس فاندر همراه شماست تا با راهنمایی دقیق، بهترین گزینه را برای ورود به مسیر پراپ تریدینگ انتخاب کنید.
      </Typography>
    </Box>
    <Box width={'35%'} p={5}>photo</Box>
  </Box>
);

export default Step4;
