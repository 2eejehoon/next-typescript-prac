import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
