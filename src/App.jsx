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
        {/* Hotjar Tracking Code for https://ai-gig.bles-software.com  */}
        <script>
          {`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3886396,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </script>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2YD6GF2BPZ"
        ></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2YD6GF2BPZ');`}
        </script>
      </Helmet>
      <Box minHeight="100vh" bgcolor="#fff">
        <Box
          sx={{
            pt: { md: 5, sm: 2, xs: 2, lg: 5, xl: 5 },
          }}
        >
          <Box mx={{ md: 20, sm: 10, xs: 2 }}>
            <Grid container spacing={{ md: 5, sm: 2, xs: 2 }}>
              <Grid item md={8} sm={12} xs={12}>
                <Hero />

                <Video />

                <About />

                <FAQ />

                <Reviews />
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Box
                  mt={10}
                  position="sticky"
                  top={100}
                  display={{ md: "block", lg: "block", xs: "none", sm: "none" }}
                >
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
