import createPalette, { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';

import paletteTokens from '@/style/styles/_palette.module.scss';

declare module '@mui/material/styles' {
  interface Palette {
    calendar?: SimplePaletteColorOptions;
    frosted: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    calendar?: SimplePaletteColorOptions;
    frosted: SimplePaletteColorOptions;
  }
}

export const palette = createPalette({
  primary: {
    // light: "",
    main: paletteTokens.colorPrimaryMain,
    // dark: "",
    // contrastText: "",
  },
  secondary: {
    // light: "",
    main: paletteTokens.colorSecondaryMain,
    // dark: "",
    // contrastText: "",
  },
  error: {
    // light: "",
    main: paletteTokens.colorErrorMain,
    // dark: "",
    // contrastText: "",
  },
  //warning: {
  //   light: "",
  // main: paletteTokens.colorWarningMain,
  //   dark: "",
  //   contrastText: "",
  //},
  calendar: {
    main: paletteTokens.colorCalendarMain,
  },
  info: {
    //   light: "",
    main: paletteTokens.colorInfoMain,
    //   dark: "",
    //   contrastText: "",
  },
  success: {
    //   light: "",
    main: paletteTokens.colorSuccessMain,
    //   dark: "",
    //   contrastText: "",
  },
  common: {
    black: paletteTokens.colorCommonBlack,
    white: paletteTokens.colorCommonWhite,
  },
  //   grey: {},
  text: {
    primary: paletteTokens.colorTextPrimary,
    secondary: paletteTokens.colorTextSecondary,
    disabled: paletteTokens.colorTextDisabled,
  },
  // action: {
  //   active: "",
  //   hover: "",
  //   hoverOpacity: 0,
  //   selected: "",
  //   selectedOpacity: 0,
  //   disabled: "",
  //   disabledOpacity: 0,
  //   disabledBackground: "",
  //   focus: "",
  //   focusOpacity: 0,
  //   activatedOpacity: 0,
  // },
  background: {
    default: paletteTokens.colorBackgroundDefault,
    paper: paletteTokens.colorBackgroundPaper,
  },
  frosted: {
    main: paletteTokens.colorFrostedMain,
    light: paletteTokens.colorFrostedLight,
  },
});
