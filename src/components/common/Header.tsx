import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "./Link";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        py: 3,
        px: 2,
        mb: "auto",
      }}
    >
      <Container
        sx={{ float: "left", position: "absolute", top: 0, left: -10 }}
      >
        <Button component={Link} size="large" href="/" sx={{ color: "black" }}>
          <Image src="/logo.png" width="164" height="62" alt="logo" />
        </Button>
      </Container>
      <Container
        maxWidth="sm"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="text"
          component={Link}
          size="large"
          href="/about"
          sx={{ color: "black" }}
        >
          ABOUT
        </Button>
        <Button
          variant="text"
          component={Link}
          size="large"
          href="/stores"
          sx={{ color: "black" }}
        >
          STORE
        </Button>
      </Container>
    </Box>
  );
}
