import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  });

  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
      <Typography
        variant="h3"
        component="h1"
        color="primary"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        color="gray"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        요청한 페이지를 찾을 수 없습니다.
        <br />
        메인 페이지로 이동합니다.
      </Typography>
    </Container>
  );
}
