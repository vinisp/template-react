import Hero from "../Fragments/Hero";
import ResultSection from "../Fragments/Result-Section";
import Main from "../Fragments/Main";
import PlanosSection from "../Fragments/PlanosSection";
import AboutCourses from "../Fragments/AboutCourses";

import Grid from "@mui/material/Grid";

function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Hero />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ResultSection />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Main />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <PlanosSection />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <AboutCourses />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
