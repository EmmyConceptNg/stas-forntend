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
import axios from "axios";
import { useEffect } from "react";

export default function App() {
useEffect(() => {
  const getCookieValue = (name) => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  };

  const fbcValue = getCookieValue("_fbc");

  const fetchIpAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org/?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return ""; // Return empty string in case of error
    }
  };

  const fetchData = async () => {
    const ipAddress = await fetchIpAddress();
    const userAgent = navigator.userAgent;

    axios.get(
      `https://capi.bles-software.com?event=page_view&&pid=936189111057967&&ip=${ipAddress}&&us=${userAgent}&&accessTokens=EAATkZAMb9LmoBOZC8dxSqZAp1T4Blv2gmfVJp0IZB4vm2Qgp0Jnh6zudv5VBaMzWZAOMMwrp3Y07YjkFLlRVQUPI0ZCcZBrSUbVoPmBDWV9KoiwAyT4hEbK26pWGpyJBzMKFRvUYmhsRopfcyEgFJOZAtQaOBxX6bzq5KSwRybOjIva0ShccIvAhZB2o7oRglrqCxfAZDZD&&fbc=${fbcValue}`
    );
  };

  fetchData();
}, []);

  
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
