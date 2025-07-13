import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Grid, Typography } from "@mui/material";

const QuickAccess = () => {
  return (
    <Grid >
      <Typography fontSize={20}>دسترسی سریع</Typography>
      <Box display={'flex'} my={3}>
        <Icon icon="majesticons:minus-line" fontSize={20} />
        <Typography mt={-.5} mx={1}> صفحه اصلی  </Typography>
      </Box>
      <Box display={'flex'} my={3}>
        <Icon icon="majesticons:minus-line" fontSize={20} />
        <Typography mt={-.5} mx={1}> موفقیت</Typography>
      </Box>
      <Box display={'flex'} my={3}>
        <Icon icon="majesticons:minus-line" fontSize={20} />
        <Typography mt={-.5} mx={1}> چالش ها </Typography>
      </Box>
      <Box display={'flex'} my={3}>
        <Icon icon="majesticons:minus-line" fontSize={20} />
        <Typography mt={-.5} mx={1}> وبلاگ </Typography>
      </Box>
    </Grid>
  );
};

export default QuickAccess
