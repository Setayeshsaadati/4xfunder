import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const Component3 = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getImageWidth = () => {
    if (isSmall) return 280;
    if (isMedium) return 150;
    return 200;
  };

  const getImageHight = () => {
    if (isSmall) return 200;
    if (isMedium) return 120;
    return 200;
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Typography
        color="#00d185"
        fontSize={{ xs: 20, md: 23 }}
        fontWeight={900}
      >
        3
      </Typography>
      <Typography
        color="white"
        fontSize={{ xs: 15, md: 17 }}
        mt={3}
        mb={4}
        textAlign="center"
        px={{ xs: 2, md: 4 }}
      >
        فورایکس فاندر با تعیین کردن مرزهای مدیریت ریسک و ضرر در استاندارد جهانی،
        محیطی منظم فراهم می‌کند که می‌تواند به معامله‌گران در توسعه انضباط و
        بهبود استراتژی‌هایشان کمک کند.
      </Typography>
      <Image
        src="/Photos/photo1.png"
        width={getImageWidth()}
        height={getImageHight()}
        alt="photo1"
      />
    </Grid>
  );
};

export default Component3;
