import { Grid, Box, Typography, Button } from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export default function Support() {

    const navigate = useNavigate()
  return (
    <Grid container spacing={3} justifyContent="space-between" sx={{ mt: 3 }}>
      <Grid item md={6}>
        <Box display="flex">
          <Box
            my="auto"
            component="img"
            src="/assets/images/web.png"
            sx={{ width: "100%" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{ display: "flex", py: 5 }}>
        <Box sx={{ my: "auto" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              lineSpacing: "auto",
              lineHeight: {
                md: "40px",
                xs: "25px",
                sm: "25px",
                lg: "40px",
              },
              fontSize: {
                md: "40px",
                xs: "40px",
                sm: "40px",
                lg: "40px",
              },
              mb: 3,
              textAlign: {
                lg: "left",
                md: "left",
                sm: "center",
                xs: "center",
              },
            }}
          >
            Web Application Technologies
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: "light",
              mb: 3,
              fontSize: {
                lg: "16px",
                md: "16px",
                sm: "12px",
                xs: "12px",
              },
              textAlign: {
                lg: "left",
                md: "left",
                sm: "center",
                xs: "center",
              },
              lineHeight: {
                md: "28px",
                xs: "18px",
                sm: "18px",
                lg: "28px",
              },
            }}
          >
            NodeJS, PHP, Python, React, Angular, MongoDB
          </Typography>
          <Box display="flex">
            <Box
              sx={{
                mx: {
                  md: 0,
                  lg: 0,
                  xs: "auto",
                  sm: "auto",
                },
              }}
            >
              <Link
                style={{
                  color: "#fff",
                  cursor: "pointer",
                }}
                to="pricing"
                smooth={true}
                duration={500}
              >
                <Button
                  sx={{
                    mx: {
                      md: 0,
                      lg: 0,
                      xs: "auto",
                      sm: "auto",
                    },
                    width: "210px",
                  }}
                  variant="outlined"
                  color="secondary"
                  size="large"
                >
                  Continue to Fiverr
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
