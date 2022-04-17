import { createTheme, ThemeProvider } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#212121",
    },
  },
  components: {
    MuiTextField:{
        styleOverrides: {
        },
    },
    MuiButton: {
      styleOverrides: {
        root: {
            variant:"contained",
            color: "#ffffff",
            background: "#ffa69e" /* fallback for old browsers */,
            background:
            "-webkit-linear-gradient(to left, #861657, #ffa69e)" /* Chrome 10-25, Safari 5.1-6 */,
            background:
            "linear-gradient(to left, #861657, #ffa69e)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#2c3e50" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to left, #2c3e50,#000000)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to left,#2c3e50,#000000)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          justifyContent: "center",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#2c3e50" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #2c3e50, #2c3e50, #2c3e50)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right,#2c3e50, #2c3e50, #2c3e50);" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        },
      },
    },
  },
});