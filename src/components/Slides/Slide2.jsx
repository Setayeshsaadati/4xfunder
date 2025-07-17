"use client"

import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"

const Slide2 = () => {
  return (
    <Box
      width={"100%"}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
      <motion.div
        style={{ flex: 1, textAlign: "center" }}
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
          duration: 0.8,
        }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: 18, md: 22 } }}
          >
            <span style={{ color: "#00CC99" }}>آزادی در حجم معاملات</span> بدون
            ریسک شناور
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <Typography mt={2} color="white" sx={{ fontSize: { xs: 14, md: 16 } }}>
            با حذف ریسک شناور در 4XFunder، شما میتوانید استراتژی‌های معاملاتی
            خود را بدون محدودیت حجمی اجرا کنید. این یعنی آزادی عمل بیشتر، کنترل
            کامل بر تصمیمات و عملکرد واقعی بدون مداخله محدودیت‌های مصنوعی. تنها
            در حساب‌های ریال بالای ۱۰۰ هزار دلار، سقف منطقی ۲٪ اعمال میشود.
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default Slide2
