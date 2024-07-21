import createPalette from "@mui/material/styles/createPalette";

import variables from "@/style/styles/_variables.module.scss";

export const palette = createPalette({
  primary: {
    light: variables.colorPrimaryMain,
    main: "",
    dark: "",
    contrastText: "",
  },
  secondary: {
    light: "",
    main: "",
    dark: "",
    contrastText: "",
  },
  error: {
    light: "",
    main: "",
    dark: "",
    contrastText: "",
  },
  warning: {
    light: "",
    main: "",
    dark: "",
    contrastText: "",
  },
  info: {
    light: "",
    main: "",
    dark: "",
    contrastText: "",
  },
  success: {
    light: "",
    main: "",
    dark: "",
    contrastText: "",
  },
  common: {
    black: "",
    white: "",
  },
  grey: {}, // Use default colors
  text: {
    primary: "",
    secondary: "",
    disabled: "",
  },
  action: {
    active: "",
    hover: "",
    hoverOpacity: 0,
    selected: "",
    selectedOpacity: 0,
    disabled: "",
    disabledOpacity: 0,
    disabledBackground: "",
    focus: "",
    focusOpacity: 0,
    activatedOpacity: 0,
  },
  background: {
    default: "",
    paper: "",
  },
});
