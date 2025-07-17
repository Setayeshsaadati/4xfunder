"use client"

import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const blogData = [
  {
    id: 1,
    title: "پراپ تریدینگ چیست؟ راهنمای کامل و جامع",
    excerpt:
      "پرایس تریدینگ یا معامله با سرمایه شرکت یک فرایندی گفته می‌شود که در آن تریدرها از سرمایه شرکت‌های پراپ برای انجام معاملات در بازارهای مالی استفاده می‌کنند ...",
    date: "۲۰ خرداد ۱۴۰۴",
    tag: "بازار فارکس",
    image: "/images/prop.png",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "تحلیل و بررسی رمز ارزها",
    excerpt:
      "بازارهای مالی پیوسته در حال حرکت‌اند، و موفقیت از آن کسانی ست که همراه با آن یاد می‌گیرند، تحلیل می‌کنند و رشد می‌کنند.",
    date: "۲۰ خرداد ۱۴۰۴",
    tag: "تحلیل",
    image: "/images/analyse.png",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "آموزش صفر تا صد TradingView",
    excerpt:
      "TradingView یکی از محبوب‌ترین و قدرتمندترین پلتفرم‌های تحلیل تکنیکال برای معامله‌گران فارکس، سهام، ارزهای دیجیتال و سایر بازارهای مالی است.",
    date: "۲۰ خرداد ۱۴۰۴",
    tag: "آموزش",
    image: "/images/chart.png",
    link: "/blog/3",
  },
]

const AnimatedInView = ({ children, from }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

  const initialX = from === "right" ? 100 : -100
  const exitX = from === "right" ? 100 : -100

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: exitX }}
      transition={{ duration: 0.8 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  )
}

const BlogSection = () => {
  if (!blogData || blogData.length === 0) return null

  return (
    <Box
      py={6}
      px={{ xs: 1, sm: 0 }}
      m={{ xs: 0, md: "auto" }}
      color="#fff"
      dir="rtl"
      width={{ xs: "95%", md: "100%" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
      >
        <Box textAlign={{ xs: "center", md: "right" }}>
          <Typography fontSize={{ xs: 24, md: 32 }} fontWeight="bold">
            مجله فورایکس فاندر
          </Typography>
          <Typography fontSize={{ xs: 14, md: 16 }}>
            جدیدترین مطالب آموزشی و خبری‌های فوراکس فاندِر
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#00CC99",
            color: "#fff",
            borderRadius: 2.5,
            px: 2,
            fontSize: { xs: 14, md: 20 },
            py: 1,
          }}
        >
          مشاهده بیشتر
          <Icon
            icon="akar-icons:arrow-back"
            width="24"
            height="24"
            style={{ marginRight: 8 }}
          />
        </Button>
      </Box>

      <Box display="flex" flexWrap="wrap" gap={4}>
        <Grid item width={{ xs: "100%", md: "47%" }}>
          <AnimatedInView from="right">
            <Card
              sx={{
                mt: 2,
                borderRadius: 4,
                height: { xs: "auto", md: "48vh" },
                position: "relative",
                backgroundImage: `url(${blogData[0].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: { xs: 300, md: "41vh" },
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(4px)",
                  px: 3,
                  py: 2,
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Icon icon="solar:calendar-linear" style={{ fontSize: 18 }} />
                  <Typography variant="caption" color="#aaa">
                    {blogData[0].date}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  mb={1}
                  flexWrap="wrap"
                  textOverflow={"auto"}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    borderRight={4}
                    borderColor="#00CC99"
                    px={1.5}
                  >
                    {blogData[0].title}
                  </Typography>
                  <Chip
                    label={blogData[0].tag}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.41)",
                      backdropFilter: "blur(100px)",
                      color: "#fff",
                      borderRadius: 1,
                    }}
                  />
                </Box>
                <Typography variant="body2" color="#bbb">
                  {blogData[0].excerpt}
                </Typography>
                <Box
                  mt={2}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  color="#00CC99"
                >
                  <Link href={blogData[0].link}>
                    <Typography fontWeight="bold" sx={{ cursor: "pointer" }}>
                      بیشتر بخوانید
                    </Typography>
                  </Link>
                  <Icon icon="solar:arrow-left-linear" />
                </Box>
              </Box>
            </Card>
          </AnimatedInView>
        </Grid>

        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          {blogData.slice(1).map((item, idx) => (
            <AnimatedInView from="left" key={item.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  backgroundColor: "rgba(0, 100, 0, 0.05)",
                  borderRadius: 4,
                  overflow: "hidden",
                  height: { xs: "auto", sm: 160 },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    width: { xs: "100%", sm: 190 },
                    height: { xs: 160, sm: "85%" },
                    objectFit: "cover",
                    mr: { xs: 0, sm: 1 },
                    borderRadius: 4,
                  }}
                />
                <CardContent sx={{ flex: 1, px: 2 }}>
                  <Typography
                    variant="caption"
                    color="#aaa"
                    mb={0.5}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <Icon icon="solar:calendar-linear" style={{ fontSize: 16 }} />
                    {item.date}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    borderRight={4}
                    borderColor="#00CC99"
                    px={1.5}
                    mb={0.5}
                  >
                    {item.title}
                  </Typography>
                  <Chip
                    label={item.tag}
                    size="small"
                    sx={{
                      bgcolor: "#3A3A4A",
                      color: "#fff",
                      borderRadius: 1,
                      mb: 0.5,
                    }}
                  />
                  <Typography variant="body2" color="#bbb" noWrap>
                    {item.excerpt}
                  </Typography>
                  <Box
                    mt={1}
                    display="flex"
                    alignItems="center"
                    gap={1}
                    color="#00CC99"
                  >
                    <Link href={item.link}>
                      <Typography fontSize={14} sx={{ cursor: "pointer" }}>
                        بیشتر بخوانید
                      </Typography>
                    </Link>
                    <Icon icon="solar:arrow-left-linear" fontSize={14} />
                  </Box>
                </CardContent>
              </Card>
            </AnimatedInView>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default BlogSection
