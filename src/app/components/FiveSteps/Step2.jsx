import { Box, Typography } from "@mui/material";

const Step2 = () => (
  <Box sx={{ display: "flex", justifyContent: "space-between", color: "#fff" }}>
    <Box mt={7} width={"65%"}>
      <Box display={"flex"}>
        <Typography fontSize={22} fontWeight={900} color="#00d285">
          چالش 4XFunder{" "}
        </Typography>
        <Typography fontSize={22} fontWeight={900} color="white" mr={0.5}>
          عادت‌های معاملاتی معامله‌گران را بهبود می‌دهد.
        </Typography>
      </Box>
      <Typography fontSize={17} mt={3}>
        در این مرحله اهداف معاملاتی ساده‌تر شده‌اند، به طوری که هدف سود به نصف کاهش یافته، در حالی که قوانین حداکثر زیان بدون تغییر باقی می‌مانند. با عبور از این مرحله، معامله‌گران به مرحله حساب 4XFunder دسترسی پیدا می‌کنند.

</Typography>
    </Box>
    <Box width={"35%"} p={5}>
      photo
    </Box>
  </Box>
);

export default Step2;
