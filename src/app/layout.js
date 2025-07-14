import "./globals.css"
import { Box } from "@mui/material"

export const metadata = {
  title: "4xFunder",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Box>
          {children}
        </Box>
      </body>
    </html>
  )
}
