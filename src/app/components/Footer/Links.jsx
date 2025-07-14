import { Icon } from "@iconify/react/dist/iconify.js"
import { Box, Grid, Typography } from "@mui/material"

const Links = () => {
  return (
    <Grid>
      <Typography fontSize={20}> لینک های مفید</Typography>
      <Box display={"flex"} my={3}>
        <Icon icon="majesticons:minus-line" fontSize={20} />
        <Typography mt={-0.5} mx={1}>
          درباره ما
        </Typography>
      </Box>
      <Box display={"flex"} my={3}>
        <Icon icon="majesticons:minus-line" fontSize={20} />
        <Typography mt={-0.5} mx={1}>
          تماس با ما
        </Typography>
      </Box>
      <Box display={"flex"} my={3}>
        <Icon icon="majesticons:minus-line" fontSize={20} />
        <Typography mt={-0.5} mx={1}>
          وب اپلیکیشن
        </Typography>
      </Box>
    </Grid>
  )
}

export default Links
