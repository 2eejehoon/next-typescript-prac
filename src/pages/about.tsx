import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
      <Desc />
    </Container>
  );
}

function Desc() {
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        color="primary"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        AWESOME FOOD STORE
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        color="gray"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        먹는 것에 진심인 사람들을 위한 맛집을 소개합니다.
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="black"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        믿을 수 있는 정보로 검증된 맛집을 추천하는 서비스를 만들겠습니다.
      </Typography>
    </>
  );
}
