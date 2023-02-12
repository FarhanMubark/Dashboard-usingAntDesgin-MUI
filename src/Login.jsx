import React from "react";

import {
  Button,
  TextField,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";


export default function Login(props) {
  const {setIsLoggedIn} = props

  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      width="100%"
      height={"90vh"}
    >
      <Card>
        <CardContent sx={{ textAlign: "center", backgroundColor: "#e3f2fd" }}>
          <Typography variant="h3" sx={{ my: 3 }}>
            Login
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "90%",
              },
            }}
          >
            <form >
              <TextField
                label="Email"
             
               
              />
              <TextField
                label="Password"
                
             
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "50%", margin: "15px" }}
                onClick={() => {
                  setIsLoggedIn(true)
                }}
                
              >
                Login
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
