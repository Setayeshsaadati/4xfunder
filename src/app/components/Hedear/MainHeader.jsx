"use client"
import { Grid, Box, useMediaQuery } from "@mui/material"
import RightSide from "./RightSide"
import Menu from "./Menu"
import LeftSide from "./LeftSide"
import { Icon } from "@iconify/react"
import { useState } from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Image from "next/image"

const navItems = ["صفحه اصلی", "موفقیت", "چالش ها", "وبلاگ"]

const MainHeader = () => {
  const isMobile = useMediaQuery("(max-width:900px)")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleToggleDrawer = () => setDrawerOpen(!drawerOpen)

  return (
    <Box sx={{ px: { xs: 2, sm: 4 , md: 10}, pr:{ xs: 0, sm: 0 , md: 10},  py: 2, width: "100%"}}>
      {!isMobile ? (
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item width={'33%'}>
            <RightSide />
          </Grid>
          <Grid item width={'33%'}>
            <Menu />
          </Grid>
          <Grid item width={'33%'}>
            <LeftSide />
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center" justifyContent="space-between" >
          <Grid item>
            <Box onClick={handleToggleDrawer} sx={{ cursor: "pointer" }}>
              <Icon
                icon="solar:hamburger-menu-linear"
                color="#fff"
                width={28}
                height={28}
              />
            </Box>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleToggleDrawer}
              PaperProps={{
                sx: { width: "66%", bgcolor: "#121212", color: "#fff" },
              }}
            >
              <List>
                {navItems.map((text, index) => (
                  <ListItem disablePadding key={index}>
                    <ListItemButton onClick={handleToggleDrawer}>
                      <ListItemText
                        primary={text}
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Grid>
          <Grid item>
            <Image src="/Photos/Logo.png" width={48} height={41} alt="logo" />
          </Grid>
          <Grid item>
            <Box
              bgcolor="#00CC99"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ width: 35, height: 35, cursor: "pointer" }}
            >
              <Icon
                icon="solar:user-linear"
                color="#fff"
                width={24}
                height={24}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default MainHeader
