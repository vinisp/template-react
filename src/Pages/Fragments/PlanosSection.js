import Planos from "../../Components/Planos";
import { Box, Typography } from "@mui/material";

function PlanosSection() {
  return (
    <>
      <Typography variant="h3" sx={{ color: "white" }}>
        Nossos Cursos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Planos number="+10 milions" name="users" stats="active" />
        <Planos number="+60 milions" name="dolar's" stats="gain" />
        <Planos number="+60 milions" name="dolar's" stats="gain" />
        <Planos number="+60 milions" name="dolar's" stats="gain" />
      </Box>
    </>
  );
}

export default PlanosSection;
