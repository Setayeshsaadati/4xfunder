"use client"

import { Icon } from "@iconify/react"
import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"

const FeatureItems = () => {
  return (
    <Grid
      borderRadius={6}
      px={{ xs: 1.5, md: 4 }}
      pt={{ xs: 0, md: 1 }}
      mt={{ xs: 0, md: -3 }}
    >
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Image
          src="/Photos/Logo.png"
          width={32}
          height={28}
          alt="logo"
          style={{ marginTop: 30 }}
        />
        <Image
          src="/Photos/Linked.png"
          width={92.15}
          height={92.19}
          alt="linked"
        />
      </Box>

      <Typography
        mt={1}
        width={70}
        pt={1}
        pb={0.5}
        px={2}
        border={1}
        borderRadius={2}
        borderColor="#E5B976"
        color="#E5B976"
        fontSize={17}
        fontWeight={500}
      >
        4xFunder
      </Typography>

      <Grid container direction={{ xs: "column", md: "row" }} mt={2}>
        <Box width={{ xs: "100%", md: "40%" }}>
          <Box display="flex" mt={1} flexWrap="wrap">
            <Typography borderLeft={1} pl={1} fontSize={18} fontWeight={900}>
              ۶k+ اکانت فعال
            </Typography>
            <Typography pr={1} fontSize={18} fontWeight={900}>
              ۳۸۰+ کاربر فعال
            </Typography>
          </Box>
          <Typography mt={1.5} pl={2} fontSize={14}>
            فورایکس فاندر با اتکا به تیمی متشکل از متخصصان ایرانی، آمریکایی و
            استرالیایی بستری حرفه‌ای و قابل اعتماد برای تریدرهای ایرانی فراهم
            کرده است.
          </Typography>
        </Box>

        <Box
          width={{ xs: "100%", md: "60%" }}
          mt={{ xs: 3, md: 0 }}
          sx={{
            overflowX: { xs: "auto", sm: "auto" },
            whiteSpace: { xs: "nowrap", sm: "nowrap" },
            "&::-webkit-scrollbar": { height: "2px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#00014",
              borderRadius: "4px",
            },
          }}
        >
          <Grid container spacing={1} minWidth={{ xs: "620px", sm: "600px" }}>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center"
                mr={3.5}
                px={2}
                py={1}
                borderRadius={2}
                bgcolor="rgba(74, 74, 81, 0.95)"
              >
                <Icon icon="heroicons:credit-card-20-solid" width={20} />
                <Typography fontSize={14} pr={1}>
                  همراهی مطمئن و حرفه‌ای در مسیر معامله‌گری
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center"
                px={2}
                py={1}
                borderRadius={2}
                bgcolor="rgba(74, 74, 81, 0.95)"
              >
                <Icon icon="solar:chart-bold" width={20} />
                <Typography fontSize={14} pr={1}>
                  داشبورد حرفه‌ای و کاملاً اتوماتیک
                </Typography>
              </Box>
            </Grid>

            {/* Bottom row: last three items (4 columns each on sm+) */}
            <Grid item xs={12} sm={4}>
              <Box
                display="flex"
                alignItems="center"
                px={2}
                py={1}
                borderRadius={2}
                bgcolor="rgba(74, 74, 81, 0.95)"
              >
                <Icon icon="solar:like-bold" width={20} />
                <Typography fontSize={14} pr={1}>
                  ۸۰ تا ۹۰ درصد تقسیم سود
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                display="flex"
                alignItems="center"
                px={2}
                py={1}
                borderRadius={2}
                bgcolor="rgba(74, 74, 81, 0.95)"
              >
                <Icon icon="nimbus:money" width={20} />
                <Typography fontSize={14} pr={1}>
                  کمترین زمان پرداخت سود
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box
                display="flex"
                alignItems="center"
                px={2}
                py={1}
                borderRadius={2}
                bgcolor="rgba(74, 74, 81, 0.95)"
              >
                <Icon icon="pepicons-pop:headphone" width={20} />
                <Typography fontSize={14} pr={1}>
                  پشتیبانی قوی ۲۴ ساعته
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FeatureItems
