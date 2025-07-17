import { Box, Typography } from "@mui/material"

const Step4 = () => (
  <Box sx={{ display: "flex", justifyContent: "space-between", color: "#fff" }}>
    <Box mt={7} width={"65%"}>
      <Box display={"flex"}>
        <Typography fontSize={22} fontWeight={900} color="#00d285">
          بهترین معامله‌گران 4XFunder{" "}
        </Typography>
        <Typography fontSize={22} fontWeight={900} color="white" mr={0.5}>
          به برنامه پریمیوم دسترسی ویژه دارند.{" "}
        </Typography>
      </Box>
      <Typography fontSize={17} mt={3}>
        بهترین معامله‌گران 4XFunder از طریق برنامه پریمیوم ما فرصت دارند تا به
        معامله‌گران حرفه‌ای در 4XFunder یک شرکت معاملاتی چند مالکیتی که با
        سرمایه واقعی خود فعالیت می‌کند، تبدیل شوند. 4XFunder از ترکیب
        معامله‌گران، تحلیلگران، ریاضی‌دانان و توسعه‌دهندگانی تشکیل شده است که
        همگی به بازارهای مالی علاقه‌مند هستند. این هدف نهایی حرفه معاملاتی است
        که 4XFunder در نظر دارد.F{" "}
      </Typography>
    </Box>
    <Box width={"35%"} p={5}>
      photo
    </Box>
  </Box>
)

export default Step4
