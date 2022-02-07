import { styled } from "@mui/material/styles";

import { Box } from "@mui/material";

import { Typography } from "@mui/material";

const BoxText = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    height: "300px",
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    height: "400px",
    width: "90%",
  },

  [theme.breakpoints.up("md")]: {
    height: "600px",
    width: "40%",
  },
  [theme.breakpoints.up("lg")]: {
    height: "600px",
    width: "60%",
  },
}));

const BoxImg = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    height: "150px",
    width: "100%",
    order: -1,
  },
  [theme.breakpoints.up("sm")]: {
    height: "200px",
    width: "90%",
    order: -1,
  },

  [theme.breakpoints.up("md")]: {
    height: "350px",
    width: "50%",
    order: 2,
  },
  [theme.breakpoints.up("lg")]: {
    height: "350px",
    width: "30%",
  },
}));

function Main() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          width: "100%",
        }}
      >
        <BoxText
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "white",
            border: "solid 2px white",
          }}
        >
          <Typography variant="h2">RESUMA COM QUATRO PALAVRAS</Typography>
          <Typography>
            Descreve um resumo com um texto breve de até 12 linhas, explicando
            de forma suscinta como os cursos funcionam e podem ajudar as pessoas
            a obterem resultados, aqui a venda começa!
          </Typography>
        </BoxText>
        <BoxImg sx={{ border: "solid 2px white", color: "white" }}>
          iLUSTRAÇÃO
        </BoxImg>
      </Box>
    </>
  );
}

export default Main;
