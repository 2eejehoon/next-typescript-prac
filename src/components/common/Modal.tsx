import React from "react";
import Portal from "./Portal";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";

interface ModalProps {
  children: React.ReactNode;
  setModalOpen: (state: boolean) => void;
}

const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function Modal({ children, setModalOpen }: ModalProps) {
  return (
    <Portal selector="portal">
      <Box sx={modalBoxStyle} minWidth="sm">
        <Grid
          container
          direction={"row"}
          spacing={2}
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Grid>
        <Button
          variant="text"
          size="large"
          sx={{
            color: "black",
            position: "absolute",
            top: "1%",
            right: "0.5%",
          }}
          onClick={() => setModalOpen(false)}
        >
          X
        </Button>
      </Box>
    </Portal>
  );
}
