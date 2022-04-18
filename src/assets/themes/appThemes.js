import { createTheme, ThemeProvider, makeStyles } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#212121",
    },
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: {
            variant: "main",
          },
          style: {
            width: "300px",
            margin: "10px",
            background:
              "linear-gradient(to left, #f6f0ea, #f1dfd1)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            justifyContent: "center",
          },
        },
        {
          props: {
            variant: "card",
          },
          style: {
            width: "fit-content",
            padding: "1px, 1px, 1px, 2px",
            margin: "5px",
            fontSize: "15px",
            background: "#f6f0ea",
          },
        },
      ],
    },

    MuiTextField: {
      styleOverrides: {},
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variant: "contained",
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
            "-webkit-linear-gradient(to right, #2c3e50,#000000)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #861657, #ffa69e)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          justifyContent: "center",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#2c3e50" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to left, #861657, #ffa69e)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to left, #861657, #ffa69e);" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        },
      },
    },
  },
});
