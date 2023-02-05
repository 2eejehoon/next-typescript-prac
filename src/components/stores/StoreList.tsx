import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import StoreModal from "./StoreModal";

interface StoreListProps {
  data: [
    {
      id: number;
      name: string;
      url: string;
      description: string;
      image: string;
      thumb: string;
    }
  ];
}

export default function StoreList({ data }: StoreListProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [clicked, setClicked] = useState(0);
  const handleClick = (id: number) => {
    setModalOpen(true);
    setClicked(id - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {modalOpen && (
        <StoreModal data={data[clicked]} setModalOpen={setModalOpen} />
      )}
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((data) => (
          <Button
            key={data.id}
            onClick={() => handleClick(data.id)}
            sx={{ color: "black" }}
          >
            <Grid item>
              <Image
                src={data.thumb}
                width="220"
                height="220"
                alt={data.name}
              />
            </Grid>
          </Button>
        ))}
      </Grid>
    </Box>
  );
}
