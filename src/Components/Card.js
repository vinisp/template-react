import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardSizes = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    height: "200px",
    width: "95%",
  },
  [theme.breakpoints.up("sm")]: {
    height: "200px",
    width: "80%",
  },

  [theme.breakpoints.up("md")]: {
    height: "200px",
    width: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    height: "200px",
    width: "20%",
  },
}));

const card = (
  <>
    <CardContent>
      <Typography>+10 mil </Typography>
      <Typography>usuários</Typography>
      <Typography>1</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Saiba Mais</Button>
    </CardActions>
  </>
);

function CardCustom() {
  return (
    <>
      <CardSizes>
        <Card sx={{ backgroundColor: "#c7def1" }}>{card}</Card>
      </CardSizes>
    </>
  );
}

export default CardCustom;
