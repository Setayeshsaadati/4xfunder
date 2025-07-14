import { Icon } from "@iconify/react"
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image"

const FunderInfo = () => {

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid m={"auto"}>
      <Box display={"flex"}>
        <Box width={70}>
          <Image
            src={"/Photos/logo.png"}
            width={47.8}
            height={41}
            alt=""
          ></Image>
        </Box>
        <Box>
          <Typography fontSize={18}>فورایکس فاندر</Typography>
          <Typography fontSize={15}>
            اولین پراپ ایرانی دارای سرمایه گذار خارجی
          </Typography>
        </Box>
      </Box>
      <Box my={4}>
        فورایکس فاندر با اتکا به تیمی متشکل از متخصصان ایرانی، آمریکایی
        واسترالیایی بستری حرفه ای و قابل اعتماد برای تریدر های ایرانی چه افراد
        با تجربه و حرفه ای،و چه کسانی که در آغاز مسیر معامله گری هستند، فراهم
        کرده است.
      </Box>
      <Box display={"flex"} gap={3} pr={isSmall ? 3.5 : 0}>
        <Box width={25} border={1} borderRadius={2} px={1} pt={1}>
          <Icon icon="uim:linkedin-alt" fontSize={24} />
        </Box>
        <Box width={25} border={1} borderRadius={2} px={1} pt={1}>
          <Icon icon="mdi:instagram" fontSize={24} />
        </Box>
        <Box
          width={25}
          border={1}
          borderRadius={2}
          px={0.75}
          pt={1.2}
          pr={1.25}
        >
          <Icon icon="garden:twitter-stroke-12" fontSize={20} />
        </Box>
      </Box>
    </Grid>
  )
}

export default FunderInfo
