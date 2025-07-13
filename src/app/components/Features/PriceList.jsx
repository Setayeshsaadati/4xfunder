"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const fetchCryptoPrices = async () => {
  const prices = {
    tet: { price: 32.56, change: -0.5, direction: "down" },
    avax: { price: 24.18, change: 1.2, direction: "up" },
    eth: { price: 44.18, change: -0.3, direction: "down" },
    btc: { price: 2418.56, change: 2.5, direction: "up" },
  };
  return prices;
};

const PriceItem = ({ name, imageSrc, apiData }) => {
  const { price, direction } = apiData;
  const color = direction === "up" ? "#00ff00" : "#ff0000";
  const arrow = direction === "up" ? "▲" : "▼";

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={1}
      sx={{
        width: { xs: "150%", sm: "45%", md: "20%" },
        bgcolor: "#1f2029",
        borderRadius: 2,
        p: 1,
        minHeight: 5,
      }}
    >
      <Grid item>
        <img
          src={imageSrc}
          alt={`${name} logo`}
          style={{ width: 40, height: 40 }}
        />
      </Grid>
      <Grid item xs>
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 18 }}
          fontWeight="bold"
          color={color}
          noWrap
        >
          ${price} {arrow}
        </Typography>
        <Typography fontSize={{ xs: 12, sm: 14, md: 16 }} color="#ccc" noWrap>
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};

const PriceList = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const getPrices = async () => {
      const data = await fetchCryptoPrices();
      setPrices(data);
    };
    getPrices();
  }, []);

  return (
    <Box
      sx={{
        overflowX: { xs: "auto", sm: "hidden" },
        whiteSpace: { xs: "nowrap", sm: "normal" }, 
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: { xs: "none", sm: "auto" },
      }}
    >
      <Grid
        container
        justifyContent="center"
        flexWrap="nowrap" 
        columnGap={{ xs: 1, sm: 1, md: 1 }}
        px={{ xs: 2, md: 0 }}
        minWidth={{ xs: "650px", sm: "auto" }} >
        <PriceItem
          name="tet"
          imageSrc="/Photos/tet.png"
          apiData={prices.tet || { price: "", direction: "" }}
        />
        <PriceItem
          name="Avalanche"
          imageSrc="/Photos/ava.png"
          apiData={prices.avax || { price: "", direction: "" }}
        />
        <PriceItem
          name="Ethereum"
          imageSrc="/Photos/eth.png"
          apiData={prices.eth || { price: "", direction: "" }}
        />
        <PriceItem
          name="Bitcoin (BTC)"
          imageSrc="/Photos/bit.png"
          apiData={prices.btc || { price: "", direction: "" }}
        />
      </Grid>
    </Box>
  );
};

export default PriceList;
