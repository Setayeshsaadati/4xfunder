"use client"

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image"
import { motion } from "framer-motion"

const Component1 = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const getImageWidth = () => {
    if (isSmall) return 280
    if (isMedium) return 500
    return 520
  }

  const getImageHight = () => {
    if (isSmall) return 200
    if (isMedium) return 300
    return 320
  }

  return (
    <Grid container direction="column" alignItems="center">
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Typography
          color="#00d185"
          fontSize={{ xs: 20, md: 23 }}
          fontWeight={900}
        >
          دسترسی به سرمایه
        </Typography>
      </motion.div>

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
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
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src="/Photos/photo1.png"
          width={getImageWidth()}
          height={getImageHight()}
          alt="photo1"
        />
      </motion.div>
    </Grid>
  )
}

export default Component1
