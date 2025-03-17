import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#77BE43", 
    },
    background: {
      default: "#E0EAE0", 
      paper: "#FFFFFF", 
    },
    text: {
      primary: "#1B1C1B", 
      secondary: "#272727", 
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#1B1C1B",
    },
    h6: {
      fontSize: "1.3rem",
      fontWeight: 600,
      color: "#1B1C1B",
    },
    body1: {
      fontSize: "1rem",
      color: "#272727",
    },
  },
});

export default theme;
