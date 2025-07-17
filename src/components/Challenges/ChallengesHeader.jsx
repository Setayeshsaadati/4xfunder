import { Box, Typography } from "@mui/material"
import Dashboard from "./Dashboard"

const ChallengesHeader = () => {
  return (
    <Box sx={{ justifyContent: "center", color: "#fff" }}>
      <Box
        mt={7}
        justifyItems={"center"}
        sx={{ justifyContent: "center", color: "#fff" }}
      >
        <Box display={"flex"} >
          <Typography fontSize={30} fontWeight={900} color="white">
              <span style={{ color: "#00CC99" }}>چالش های </span> 
            فورایکس فاندر
          </Typography>
        </Box>
        <Typography fontSize={17} mt={2}>
          براساس توانایی و مهارت خود، مسیر مدیریت سرمایه راانتخاب کنید. برای
          شرکت در چالش ها وار حساب کاربری خود شوید
        </Typography>
      </Box>
      <Dashboard />
    </Box>
  )
}

export default ChallengesHeader
