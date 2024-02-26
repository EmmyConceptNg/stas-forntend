import {
  Box,
  Button,
  CircularProgress,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";

import { useState, useEffect } from "react";
import Text from "./utils/Text";
import { notify } from "../utils/utils";
import { ArrowBack, CopyAll } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import axios from "../api/axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function SubscriptionModal({ open, setOpen, bot }) {
  
  const [register, setRegister] = useState(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);

  

  

  const [save, setSave] = useState(false);

  

  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", 
  });
 const handlePhonChange = (value, name) => {
   
   
     setPayload((prevPayload) => ({
       ...prevPayload,
       phone: value,
     }));
   
 };
 const handleChange = (e) => {
   const {name, value} = e.target
     setPayload((prevPayload) => ({
       ...prevPayload,
       [name]: value,
     }));
  
 };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSave(true);


    axios
      .post("/api/users", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        notify(
          "Thank You, You'll be redirected soon",
          "success"
        );
        setSave(false);
        setOpen(false);
        location.href =
          "https://www.fiverr.com/stas4000/develop-or-integrate-ai-powered-web-app-using-gpt3-or-openai";
      })
      .catch((error) => {
        notify(error?.response?.data?.error, "error");
        setSave(false);
      });
  };
  return (
    <>
      <ToastContainer />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            width: "500px",
          },
        }}
        BackdropProps={{
          onClick: handleClose,
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Subscribe to {bot?.name}
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          s
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <OutlinedInput
                  required
                  id="firstName"
                  type="firstName"
                  name="firstName"
                  value={payload.firstName}
                  onChange={handleChange}
                  label="First Name"
                />
              </FormControl>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <OutlinedInput
                  required
                  id="lastName"
                  type="lastName"
                  name="lastName"
                  value={payload.lastName}
                  onChange={handleChange}
                  label="Last Name"
                />
              </FormControl>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  required
                  id="email"
                  type="email"
                  name="email"
                  value={payload.email}
                  onChange={handleChange}
                  label="Email"
                />
              </FormControl>

              <Box width="100%">
                <PhoneInput
                  defaultCountry="ua"
                  value={payload.phone}
                  onChange={(value, name) => handlePhonChange(value, name)}
                  name="phone"
                  style={{ minWidth: "100%" }}
                />
              </Box>

              <Box display="flex">
                <LoadingButton loading={save} type="submit" variant="contained">
                  Save
                </LoadingButton>
              </Box>
            </Stack>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
