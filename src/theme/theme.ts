import { defaultTheme } from "react-admin";
import { red, blueGrey, green } from "@mui/material/colors";

export const theme = {
  ...defaultTheme,
  palette: {
    primary: green,
    secondary: blueGrey,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "Jost",
  },
};
