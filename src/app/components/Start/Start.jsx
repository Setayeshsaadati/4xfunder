"use client"

import { Icon } from "@iconify/react"
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import Image from "next/image"
import { motion } from "framer-motion"

const Start = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const getRightImageWidth = () => {
    if (isSmall) return 60
    if (isMedium) return 120
    return 200
  }

  const getRightImageHight = () => {
    if (isSmall) return 60
    if (isMedium) return 80
    return 200
  }

  const getLeftImageHight = () => {
    if (isSmall) return 130
    if (isMedium) return 120
    return 220
  }

  const getLeftImageWidth = () => {
    if (isSmall) return 80
    if (isMedium) return 180
    return 170
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        position: "relative",
        width: "100%",
        height: isSmall ? 250 : 250,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        textAlign: "center",
        my: { xs: 3, md: 5 },
        px: { xs: 1, md: 2 },
        pt: { xs: 6, md: 10 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          zIndex: 10,
          width: "100%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingInline: "16px",
        }}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            fontSize={{ xs: 28, md: 40 }}
            mt={{ xs: 0, md: -8 }}
            fontWeight={900}
            my={0.5}
          >
            فورایکس فاندر
          </Typography>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            fontSize={{ xs: 20, md: 32 }}
            fontWeight={900}
            color="#E5B976"
            mb={2}
          >
            اولین پلتفرم پراپ تریدینگ ایرانی با سرمایه گذاری خارجی
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography fontSize={{ xs: 14, md: 16 }} color="#ddd">
            دسترسی به سرمایه، کاهش ریسک سرمایه شخصی، ابزارها و منابع حرفه ای و...
          </Typography>
        </motion.div>

        <Box mt={5} display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                px: { xs: 1.5, md: 3 },
                py: { xs: 1, md: 1.5 },
                bgcolor: "#00cc99",
                borderRadius: 2.5,
                fontSize: { xs: 14, md: 18 },
                color: "white",
                display: "flex",
                alignItems: "center",
                mb: { xs: 2, md: 0 },
                boxShadow: "0 0 20px #00cc9966",
                transition: "all 0.3s ease-in-out",
              }}
            >
              شروع کنید
              <Icon
                icon="akar-icons:arrow-back"
                width="20"
                height="20"
                style={{ marginRight: 10 }}
              />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Button
              sx={{
                fontSize: { xs: 14, md: 18 },
                mx: { xs: 0, md: 4 },
                color: "white",
                transition: "color 0.3s ease",
                "&:hover": { color: "#00cc99" },
              }}
            >
              آموزش
            </Button>
          </motion.div>
        </Box>
      </motion.div>

      <Box
        sx={{
          position: "absolute",
          top: { xs: -20, md: -40, lg: 20 },
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 4, md: 12 },
          alignItems: "flex-end",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Image
            src="/Photos/bggoldcoin.png"
            width={getRightImageWidth()}
            height={getRightImageHight()}
            alt="gold coin"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Image
            src="/Photos/bgblackcoin.png"
            height={getLeftImageHight()}
            width={getLeftImageWidth()}
            alt="black coin"
          />
        </motion.div>
      </Box>
    </Box>
  )
}

export default Start
