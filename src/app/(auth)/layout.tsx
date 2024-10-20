"use client";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        Tetsdsdssdsd
        <ThemeProvider theme={theme}>
          <>{children}</>
        </ThemeProvider>
      </body>
    </html>
  );
}
