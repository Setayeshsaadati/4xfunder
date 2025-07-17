import { Box, Typography, Grid } from "@mui/material"
import Image from "next/image"

const Step1 = () => (
  <Grid
    container
    spacing={4}
    direction={{ xs: "column", md: "row" }}
    alignItems="center"
    justifyContent="space-between"
  >
    <Grid size={{ xs: 12, md: 8 }}>
      <Box mt={{ xs: 3, md: 0 }}>
        <Box display="flex" flexWrap="wrap" gap={1}>
          <Typography fontSize={20} fontWeight={900} color="#00CC99">
            انتخاب آگاهانه
          </Typography>
          <Typography fontSize={20} fontWeight={900} color="white">
            چالش با پشتیبانی حرفه ای
          </Typography>
        </Box>
        <Typography fontSize={15} mt={3} color="#fff">
          پیش از آغاز مسیر با استفاده از حساب‌های تست و ارزیابی اولیه، چالش
          معاملاتی متناسب با سطح مهارت خود را انتخاب می‌کنید. در این مرحله، تیم
          پشتیبانی ۲۴ ساعته فورایکس فاندر همراه شماست تا با راهنمایی دقیق،
          بهترین گزینه را برای ورود به مسیر پراپ تریدینگ انتخاب کنید.
        </Typography>
      </Box>
    </Grid>

    <Grid size={{ xs: 12, md: 4 }}>
      <Box display="flex" justifyContent="center">
        <Image
          src="/images/changecoin.png"
          width={233.36}
          height={220}
          alt="coin"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Grid>
  </Grid>
)

export default Step1
