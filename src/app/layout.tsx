"use client";

import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../themes/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body style={{ backgroundColor: theme.palette.background.default }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
