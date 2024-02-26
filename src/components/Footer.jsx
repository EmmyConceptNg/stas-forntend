
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";


import { Button, Container, Link, Stack } from "@mui/material";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  background: theme.palette.background.paper,
  backgroundColor: "transparent",
  justifyContent: "center",
  backdropFilter: "blur(4px)",

  [theme.breakpoints.up("lg")]: {
    minHeight: "70px",
  },
}));
const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  color: theme.palette.text.secondary,
}));
export default function Footer(props) {
  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <Container>
          <Box
            bgcolor="transparent"
            py={3}
            width={"100%"}
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
              },
            }}
          >
            <Box
              display={"flex"}
              flexGrow={1}
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                },
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={props.toggleMobileSidebar}
                sx={{
                  display: {
                    lg: "inline",
                    xs: "inline",
                  },
                  my: "auto",
                }}
              ></IconButton>

              <Box>
                <Box
                  component="img"
                  src="/assets/logo/logo.png"
                  sx={{ width: "135px" }}
                ></Box>
              </Box>
              <Box flexGrow={1}>
                <Box sx={{ display: "flex" }}>
                  <Stack
                    spacing={5}
                    sx={{ mx: "auto" }}
                    direction="row"
                    alignItems="center"
                  >
                    <Link
                      sx={{
                        color: "#fff",
                        fontSize: "15px",
                        textWrap: "no-wrap",
                      }}
                      href="#"
                    >
                      Home
                    </Link>
                    <Link
                      sx={{
                        color: "#fff",
                        fontSize: "15px",
                        textWrap: "no-wrap",
                      }}
                      href="#"
                    >
                      Pricing
                    </Link>
                    <Link
                      sx={{
                        color: "#fff",
                        fontSize: "15px",
                        textWrap: "no-wrap",
                      }}
                      href="#"
                    >
                      About Us
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </Box>
          
          </Box>
        </Container>
      </ToolbarStyled>
    </AppBarStyled>
  );
}
