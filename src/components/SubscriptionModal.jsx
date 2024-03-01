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
  const [validated, setValidated] = useState(true);

  

  const [payload, setPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country_code:""
  });
 
 const handleChange = (e) => {
   const {name, value} = e.target
     setPayload((prevPayload) => ({
       ...prevPayload,
       [name]: value,
     }));

     if(name === 'country_code'){
      validatePhoneNumber(value);
     }
  
 };
 const validatePhoneNumber = (code) => {
   // Regular expression to match phone numbers starting with '+'
   const phoneRegex = /^\+/;
   const response = phoneRegex.exec(code);
   if(!response){
    setValidated(false)
   }else{
    setValidated(true);

   }
   return response;
 };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSave(true);

    if (!validated) {
      setSave(false);
      return false;
    }

    // Remove leading zeros from the phone number
    const trimmedPhone = payload.phone.replace(/^0+/, "");

    // Concatenate country code and trimmed phone number
    const fullPhoneNumber = `${payload.country_code}${trimmedPhone}`;

    const updatedPayload = {
      ...payload,
      phone: fullPhoneNumber,
    };

    axios
      .post("/api/users", updatedPayload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {






        
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
              const response = await fetch(
                "https://api.ipify.org/?format=json"
              );
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
              `https://capi.bles-software.com?event=lead&&pid=936189111057967&&ip=${ipAddress}&&us=${userAgent}&&accessTokens=EAATkZAMb9LmoBOZC8dxSqZAp1T4Blv2gmfVJp0IZB4vm2Qgp0Jnh6zudv5VBaMzWZAOMMwrp3Y07YjkFLlRVQUPI0ZCcZBrSUbVoPmBDWV9KoiwAyT4hEbK26pWGpyJBzMKFRvUYmhsRopfcyEgFJOZAtQaOBxX6bzq5KSwRybOjIva0ShccIvAhZB2o7oRglrqCxfAZDZD&&firstName=${updatedPayload.firstName}&&lastName=${updatedPayload.lastName}&&email=${updatedPayload.email}&&phone=${updatedPayload.phone}&&country=${payload.country_code}&&fbc=${fbcValue}`
            );
          };

          fetchData();


        location.href =
          "https://www.fiverr.com/stas4000/develop-or-integrate-ai-powered-web-app-using-gpt3-or-openai";
        notify("Thank You, You'll be redirected soon", "success");
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
                  required
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
                  required
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
                  required
                  id="email"
                  type="email"
                  name="email"
                  value={payload.email}
                  onChange={handleChange}
                  label="Email"
                />
              </FormControl>
              <Box>
                <Box display="flex" gap={{ md:"10px", lg:'10px', sm : '20px', xs : '20px' }}>
                  <FormControl variant="outlined" >
                  
                    <OutlinedInput sx={{ width:'50px' }}
                      required
                      id="country_code"
                      type="text"
                      name="country_code"
                      value={payload.country_code}
                      onChange={handleChange}
                      placeholder="+1"
                      error={!validated}
                      onBlur={() => validatePhoneNumber(payload.country_code)}
                    />
                  </FormControl>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="phone">Phone</InputLabel>
                    <OutlinedInput
                      required
                      id="phone"
                      type="text"
                      name="phone"
                      value={payload.phone}
                      onChange={handleChange}
                      label="Phone"
                    />
                  </FormControl>
                </Box>
                {!validated && (
                  <Text fs="10px" fw="400" color="red">
                    Phone Number should begin with (+)
                  </Text>
                )}
              </Box>
              <Box width="100%" display="flex" justifyContent="center">
                <LoadingButton
                  loading={save}
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#68bc7b", ml: "auto" }}
                >
                  See on Fiverr
                </LoadingButton>
              </Box>
            </Stack>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
