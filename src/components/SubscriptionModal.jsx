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
         location.href =
           "https://www.fiverr.com/stas4000/develop-or-integrate-ai-powered-web-app-using-gpt3-or-openai";
        notify(
          "Thank You, You'll be redirected soon",
          "success"
        );
        setSave(false);
        setOpen(false);
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
        
        
        <DialogContent dividers>
          <Box component="form" onSubmit={handleSubmit} width="100%">
            
            
            <Stack spacing={2} width="100%">
              
            
              <FormControl variant="outlined" fullWidth>
                
            
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <OutlinedInput
                  required size="small"
                  id="firstName"
                  type="firstName"
                  name="firstName"
                  value={payload.firstName}
                  onChange={handleChange}
                  label="First Name"
                />
              </FormControl>
              <FormControl variant="outlined" fullWidth>
                
                {/* Set fullWidth to make the FormControl fill the entire width */}
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <OutlinedInput
                  required size="small"
                  id="lastName"
                  type="lastName"
                  name="lastName"
                  value={payload.lastName}
                  onChange={handleChange}
                  label="Last Name"
                />
              </FormControl>
              <FormControl variant="outlined" fullWidth>
                
                {/* Set fullWidth to make the FormControl fill the entire width */}
                <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  required size="small"
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
                  forceDialCode
                  defaultCountry="ua"
                  value={payload.phone}
                  onChange={(value, name) => handlePhonChange(value, name)}
                  name="phone"
                  containerStyle={{ width: "100%" }} // Ensure the container div fills the entire width
                  inputStyle={{ width: "100%" }}
                />
              </Box>
              <Box width="100%" display="flex" justifyContent="center">
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
