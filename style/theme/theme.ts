"use client";

import { alpha, createTheme } from "@mui/material";

import { palette } from "./palette";
import { typography } from "./typography";
import { variables, Variables } from "./variables";

declare module "@mui/material/styles" {
  interface Theme {
    variables: Variables;
  }
  interface ThemeOptions {
    variables?: Variables;
  }
}

export const theme = createTheme({
  variables,
  palette,
  spacing: [0, 4, 8, 12, 16, 32],
  typography,
  shape: {
    borderRadius: 12,
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          textTransform: "initial",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        },
      },
      variants: [
        {
          props: { variant: "text", color: "secondary" },
          style: {
            color: palette.text.primary,
          },
        },
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            color: palette.text.primary,
            borderColor: palette.text.primary,
          },
        },
        {
          props: { variant: "contained", color: "success" },
          style: {
            color: palette.success.main,
            backgroundColor: palette.secondary.main,
            ":hover": {
              backgroundColor: alpha(palette.success.main, 0.1),
            },
          },
        },
        {
          props: { variant: "contained", color: "info" },
          style: {
            color: palette.info.main,
            backgroundColor: palette.secondary.main,
            ":hover": {
              backgroundColor: alpha(palette.info.main, 0.1),
            },
          },
        },
        {
          props: { variant: "contained", color: "warning" },
          style: {
            color: palette.warning.main,
            backgroundColor: palette.secondary.main,
            ":hover": {
              backgroundColor: alpha(palette.warning.main, 0.1),
            },
          },
        },
      ],
    },
  },
});
