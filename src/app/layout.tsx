"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyles";
import Header from "@/components/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}