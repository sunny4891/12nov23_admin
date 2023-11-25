"use client";
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3", // Replace with your primary color
    },
    secondary: {
      main: "#FF4081", // Replace with your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default Theme;
