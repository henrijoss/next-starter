"use client";

import { createTheme } from "@mui/material";

import { palette } from "./palette";

export const theme = createTheme({
  palette,
  typography: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
    caption: {},
    button: {},
    overline: {},
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: "2rem",
          paddingBottom: "2rem",
        },
      },
    },
  },
});
