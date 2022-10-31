import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "black",
    },
    primary: {
      main: "#FDD702",
      light: "#ffe35b",
      dark: "#F75656",
      contrastText: "#1c1c1c",
    },
    secondary: {
      main: "#1c1c1c",
      dark: "#F75656",
      contrastText: "#ffff",
    },
  },
  typography: {
    fontFamily: "Helvetica",
    fontWeightMedium: 700,
  },

  shape: { borderRadius: 50 },
});

export default theme;
