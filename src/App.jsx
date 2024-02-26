import { Box, Container, Grid } from "@mui/material";
import Header from "./components/Header";

import { Element } from "react-scroll";
import Pricing from "./components/Pricing";
import Trade from "./components/About";
import Support from "./components/Support";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import Hero from "./components/Hero";
import Video from "./components/Video";
import About from "./components/About";
import { Reviews } from "./components/Reviews";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Stas</title>
      </Helmet>
      <Box minHeight="100vh" bgcolor="#fff">
        <Box
          sx={{
            pt: { md: 5, sm: 2, xs: 2, lg: 5, xl: 5 },
          }}
        >
          <Box mx={{ md: 20, sm:10, xs:5 }}>
            <Header />

            <Grid container spacing={{ md: 5, sm: 2, xs: 2 }}>
              <Grid item md={8} sm={12} xs={12}>
                <Element name="home" className="section smooth-scroll">
                  <Hero />
                </Element>
                <Element name="home" className="section smooth-scroll">
                  <Video />
                </Element>
                <Element name="about" className="section smooth-scroll">
                  <About />
                </Element>
                <Element name="about" className="section smooth-scroll">
                  <FAQ />
                </Element>

                <Element name="reviews" className="section smooth-scroll">
                  <Reviews />
                </Element>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Box mt={10} position="sticky" top={0}>
                  <Pricing />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
