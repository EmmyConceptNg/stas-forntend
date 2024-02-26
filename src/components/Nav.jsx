import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Stack, Box, Button } from "@mui/material";
export function Navbar({ ffor = "" }) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        flexGrow={1}
        sx={{
          display: { xs: "block", md: "block", lg: "flex" },
        }}
      >
        <Stack
          spacing={ffor === "mobile" ? 2 : 5}
          sx={{ mx: "auto" }}
          direction={ffor === "mobile" ? "column" : "row"}
          alignItems={ffor === "mobile" ? "start" : "start"}
        >
          {[
            {
              to: "home",
              name: "Home",
            },
            {
              to: "pricing",
              name: "Pricing",
            },
            {
              to: "about",
              name: "About Us",
            },
            {
              to: "reviews",
              name: "Reviews",
            },
          ].map((nav, index) => (
            <Link
              style={{
                color: "#62646a",
                cursor: "pointer",
              }}
              to={nav?.to}
              smooth={true}
              duration={500}
              key={index}
            >
              {nav?.name}
            </Link>
          ))}
        </Stack>
      </Box>
      {ffor === "mobile" && <br />}
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "flex",
          },
        }}
      >
        <Stack
          spacing={ffor === "mobile" ? 2 : 5}
          sx={{ mx: "auto" }}
          direction={ffor === "mobile" ? "row" : "row"}
          alignItems={ffor === "mobile" ? "center" : "center"}
        >
          <Link
            style={{
              color: "#fff",
              cursor: "pointer", margin: 'auto'
            }}
            to="pricing"
            smooth={true}
            duration={500} 
          >
            <Button
              variant="outlined"
              color="success"
            >
              Join
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}


