"use client";

import { Icon } from "@iconify/react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Traderx = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        px: {
          xs: 2,
          sm: 4,
          md: 8,
          lg: 10,
          xl: 12,
        },
        py: { xs: 6, sm: 8, md: 5 },
        pb: { xs: 6, sm: 8, md: 15 },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} md={6}>
          <Box
            width="fit-content"
            display="flex"
            bgcolor="#473f38"
            px={2}
            py={1}
            borderRadius={2}
          >
            <Typography color="#E5B976" fontSize={15} mt={0.5} ml={0.5}>
              TRADERX
            </Typography>
            <Image
              src="/Photos/like.png"
              width={22}
              height={22}
              alt="like icon"
            />
          </Box>

          <Typography
            fontSize={{ xs: 24, sm: 28, md: 32 }}
            color="white"
            fontWeight={900}
            mt={2}
          >
            نفرات برتر فورایکس فاندر
          </Typography>
          <Typography fontSize={16} color="#ccc" mt={1}>
            رده بندی تریدر های برتر روز با توجه به برداشت های سود
          </Typography>

          <Grid container spacing={2} mt={5}>
            <Grid size={{ xs: 12, sm: 6}}>
              <Box display="flex" alignItems="center" mb={2}>
                <Icon
                  icon="solar:check-square-bold"
                  width="24"
                  height="24"
                  color="#00CC99"
                />
                <Typography fontSize={16} >
                  ثبت نام کنید
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Icon
                  icon="solar:check-square-bold"
                  width="24"
                  height="24"
                  color="#00CC99"
                />
                <Typography >
                  قوانین را مطالعه کنید
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>

            
              <Box display="flex" alignItems="center" mb={2}>
                <Icon
                  icon="solar:check-square-bold"
                  width="24"
                  height="24"
                  color="#00CC99"
                />
                <Typography fontSize={16} >
                  چالش خود را شروع کنید
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" size={{ xs: 12, sm:12  }} >
                <Icon
                  icon="solar:check-square-bold"
                  width="24"
                  height="24"
                  color="#00CC99"
                />
                <Typography fontSize={16}>
                  تریدر بعدی شما باشید
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            sx={{
              mt: 4,
              px: 3,
              py: 1.5,
              bgcolor: "#00d285",
              borderRadius: 2.5,
              fontSize: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            شروع کنید
            <Icon
              icon="akar-icons:arrow-back"
              width={24}
              height={24}
              style={{ marginRight: 10 }}
            />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Traderx;
