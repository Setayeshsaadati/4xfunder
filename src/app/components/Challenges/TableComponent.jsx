"use client"

import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"

const TableComponent = ({ phase, quantity }) => {
  const [data, setData] = useState({
    durationTest: "",
    minPeriod: "",
    annualProfit: "",
    maxProfit: "",
    totalProfit: "",
    maxInvestment: "",
    cost: "",
  })

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
    }
    return mockData[phase][quantity]
  }

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(phase, quantity)
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
      )
    }
    getData()
  }, [phase, quantity])

  const rows = [
    { label: "مدت ترید", values: [data.durationTest, data.durationTest, data.durationTest] },
    { label: "حداقل روزهای ترید", values: [data.minPeriod, data.minPeriod, data.minPeriod] },
    { label: "حداکثر ضرر (درصد)", values: [data.annualProfit, data.annualProfit, data.annualProfit] },
    { label: "حداکثر ضرر", values: [data.maxProfit, data.maxProfit, data.maxProfit] },
    { label: "سود مورد نظر (درصد)", values: [data.totalProfit, data.totalProfit, data.totalProfit] },
    { label: "سود مورد نظر", values: [data.maxInvestment, data.maxInvestment, data.maxInvestment] },
    { label: "سقف رشد سرمایه", values: [data.cost, data.cost, data.cost] },
    { label: "مبلغ (یکبار پرداخت)", values: [data.cost, data.cost, data.cost] },
  ]

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
          width: "95%",
          m: "auto",
          borderRadius: "20px",
          color: "#fff",
          backgroundColor: "#0C0D1733",
          backdropFilter: { xs: "blur(20px)", md: "blur(30px)" },
          direction: "rtl",
          minWidth: { xs: "650px", sm: "auto" },
        }}
      >
        <TableHeader />
        {rows.map((row, i) => (
          <TableRow
            key={i}
            label={row.label}
            values={row.values}
            isLast={i === rows.length - 1}
          />
        ))}
      </Box>
    </Box>
  )
}

export default TableComponent
