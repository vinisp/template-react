import CardCustom from "../../Components/Card";
import { Box } from "@mui/material";

function ResultSection() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
      </Box>
    </>
  );
}

export default ResultSection;
