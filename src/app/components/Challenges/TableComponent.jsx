"use client";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const TableComponent = ({ phase, quantity }) => {
  const [data, setData] = useState({
    durationTest: "",
    minPeriod: "",
    annualProfit: "",
    maxProfit: "",
    totalProfit: "",
    maxInvestment: "",
    cost: "",
  });

  const fetchData = async (phase, quantity) => {
    const mockData = {
      Alpha: {
        1000: {
          durationTest: "نامحدود",
          minPeriod: "3 روز",
          annualProfit: "5%",
          maxProfit: "12%",
          totalProfit: "-",
          maxInvestment: "-",
          cost: "-",
        },
        2500: {
          durationTest: "60 روز",
          minPeriod: "3 روز",
          annualProfit: "5%",
          maxProfit: "12%",
          totalProfit: "60 روز",
          maxInvestment: "$1000000",
          cost: "60 روز",
        },
        5000: {
          durationTest: "30 روز",
          minPeriod: "3 روز",
          annualProfit: "5%",
          maxProfit: "12%",
          totalProfit: "880%",
          maxInvestment: "$1000000",
          cost: "$14",
        },
        10000: {
          durationTest: "30 روز",
          minPeriod: "3 روز",
          annualProfit: "5%",
          maxProfit: "12%",
          totalProfit: "880%",
          maxInvestment: "$1000000",
          cost: "$14",
        },
      },
      Beta: {
        1000: {
          durationTest: "60 روز",
          minPeriod: "3 روز",
          annualProfit: "6%",
          maxProfit: "15%",
          totalProfit: "90 روز",
          maxInvestment: "$2000000",
          cost: "90 روز",
        },
        2500: {
          durationTest: "90 روز",
          minPeriod: "4 روز",
          annualProfit: "6%",
          maxProfit: "15%",
          totalProfit: "90 روز",
          maxInvestment: "$2000000",
          cost: "$20",
        },
        5000: {
          durationTest: "45 روز",
          minPeriod: "4 روز",
          annualProfit: "6%",
          maxProfit: "15%",
          totalProfit: "900%",
          maxInvestment: "$2000000",
          cost: "$20",
        },
        10000: {
          durationTest: "45 روز",
          minPeriod: "4 روز",
          annualProfit: "6%",
          maxProfit: "15%",
          totalProfit: "900%",
          maxInvestment: "$2000000",
          cost: "$20",
        },
      },
    };
    return mockData[phase][quantity];
  };

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(phase, quantity);
      setData(
        result || {
          durationTest: "",
          minPeriod: "",
          annualProfit: "",
          maxProfit: "",
          totalProfit: "",
          maxInvestment: "",
          cost: "",
        }
      );
    };
    getData();
  }, [phase, quantity]);

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
      <Box
        sx={{
          width: "90%",
          m: "auto",
          borderRadius: "20px",
          minHeight: "90vh",
          color: "#fff",
          backgroundColor: "#0C0D1733",
          backdropFilter: { xs: "blur(20px)", md: "blur(40px)" },
          direction: "rtl",
          minWidth: { xs: "650px", sm: "auto" },
        }}
      >
        <Box
          sx={{
            zIndex: 100,
            height: "10%",
            px: 15,
            py: 5,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: "#272935",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
            gap: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            ویژگی ها
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            Step 1
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            Step 2
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
            Step 3
          </Typography>
        </Box>
        {[
          {
            label: "مدت تست",
            values: [data.durationTest, data.durationTest, data.durationTest],
          },
          {
            label: "حداقل دوره",
            values: [data.minPeriod, data.minPeriod, data.minPeriod],
          },
          {
            label: "سود سالانه",
            values: [data.annualProfit, data.annualProfit, data.annualProfit],
          },
          {
            label: "حداکثر سود",
            values: [data.maxProfit, data.maxProfit, data.maxProfit],
          },
          {
            label: "سود کل",
            values: [data.totalProfit, data.totalProfit, data.totalProfit],
          },
          {
            label: "حداکثر سرمایه",
            values: [
              data.maxInvestment,
              data.maxInvestment,
              data.maxInvestment,
            ],
          },
          { label: "هزینه", values: [data.cost, data.cost, data.cost] },
        ].map(({ label, values }, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              textAlign: "center",
              alignItems: "center",
              height: "9%",
              px: 15,
              py: 5,
              borderBottom: i !== 6 ? "2px solid #272935" : "none",
              gap: 0,
            }}
          >
            <Typography sx={{ minWidth: "auto", fontWeight: "bold" }}>
              {label}
            </Typography>
            {values.map((val, idx) => (
              <Typography key={idx} sx={{ minWidth: "auto" }}>
                {val || "-"}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}; 

export default TableComponent;
