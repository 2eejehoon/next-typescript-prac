import { useState, useEffect } from "react";
import Modal from "../common/Modal";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "../common/Link";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

interface StoreModalProps {
  id: number;
  setModalOpen: (state: boolean) => void;
}

interface Data {
  id: number;
  name: string;
  url: string;
  description: string;
  image: string;
  thumb: string;
}

export default function StoreModal({ id, setModalOpen }: StoreModalProps) {
  const [data, setData] = useState<null | Data>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:9000/stores/${id + 1}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return null;
  if (!data) return null;

  return (
    <Modal setModalOpen={setModalOpen}>
      <Grid item>
        <Image src={data.image} width={280} height={280} alt={data.name} />
      </Grid>
      <Grid item>
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" color="primary">
            {data.name}
          </Typography>
          <Textarea value={data.description} disabled />
          {data.url && (
            <Button
              variant="text"
              component={Link}
              size="large"
              href={data.url}
              sx={{ color: "black" }}
            >
              홈페이지 바로가기
            </Button>
          )}
        </Container>
      </Grid>
    </Modal>
  );
}

const Textarea = styled.textarea`
  font-size: 14px;
  color: gray;
  border: none;
  resize: none;
  width: 30vw;
  min-width: 280px;
  min-height: 280px;
  overflow: hidden;
  background-color: white;
`;
