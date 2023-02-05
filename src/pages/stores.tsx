import { GetServerSideProps } from "next";
import Container from "@mui/material/Container";
import StoreList from "../components/stores/StoreList";

const BASE_URL = "http://localhost:9000";

interface StoreProps {
  data: [
    {
      id: number;
      name: string;
      description: string;
      image: string;
      thumb: string;
      url: string;
    }
  ];
}

export default function Stores({ data }: StoreProps) {
  return (
    <Container
      component="main"
      sx={{
        mt: 8,
        mb: 2,
        textAlign: "center",
        display: "flex",
      }}
      maxWidth="lg"
    >
      <StoreList data={data} />
    </Container>
  );
}

type StoresData = {
  data: [
    {
      id: number;
      name: string;
      description: string;
      image: string;
      thumb: string;
      url: string;
    }
  ];
};

export const getServerSideProps: GetServerSideProps<{
  data: StoresData;
}> = async () => {
  const res = await fetch(BASE_URL + "/stores");
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { data } };
};
