import { TypographyOptions } from '@mui/material/styles/createTypography';

import typographyTokens from '@/style/styles/_typography.module.scss';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display1: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
  }
}

export const typography: TypographyOptions = {
  fontFamily: 'inherit', // Defined in root layout
  display1: {
    fontSize: typographyTokens.typographyDisplay1Size,
    fontWeight: typographyTokens.typographyDisplay1Weight,
  },
  h1: {
    fontSize: typographyTokens.typographyH1Size,
    fontWeight: typographyTokens.typographyH1Weight,
  },
  h2: {
    fontSize: typographyTokens.typographyH2Size,
    fontWeight: typographyTokens.typographyH2Weight,
  },
  h3: {
    fontSize: typographyTokens.typographyH3Size,
    fontWeight: typographyTokens.typographyH3Weight,
  },
  h4: {
    fontSize: typographyTokens.typographyH4Size,
    fontWeight: typographyTokens.typographyH4Weight,
  },
  h5: {},
  h6: {},
  body1: {
    fontSize: typographyTokens.typographyBody1Size,
    fontWeight: typographyTokens.typographyBody1Weight,
  },
  body2: {
    fontSize: typographyTokens.typographyBody2Size,
    fontWeight: typographyTokens.typographyBody2Weight,
  },
  subtitle1: {
    fontSize: typographyTokens.typographySubtitle1Size,
    fontWeight: typographyTokens.typographySubtitle1Weight,
  },
  subtitle2: {},
  caption: {},
  button: {},
  overline: {},
};
