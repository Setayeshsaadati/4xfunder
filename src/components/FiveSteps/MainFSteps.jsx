import { Grid, Typography } from "@mui/material"
import MainNav from "./MainNav"

const MainFSteps = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      m={'auto'}
      py={{ xs: 6, md: 10 }}
      minHeight={{ xs: "auto", md: "80vh" }}
    >
      <Typography
        fontSize={{ xs: 22, md: 32 }}
        fontWeight={900}
        textAlign="center"
        mb={4}
      >
        استعدادتان را در۵ گام به{" "}
        <span style={{ color: "#00CC99", marginRight:  {sx: 0 ,md: 5}, }}>سود واقعی</span>{" "}
        تبدیل کنید
      </Typography>
      <MainNav />
    </Grid>
  )
}

export default MainFSteps
