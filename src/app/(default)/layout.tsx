"use client";
import MainLayout from "@/components/Layout";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
