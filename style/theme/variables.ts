import { CSSProperties } from 'react';

import variablesTokens from '@/style/styles/_variables.module.scss';

export type Variables = {
  radius: {
    xs: CSSProperties['borderRadius'];
    sm: CSSProperties['borderRadius'];
    md: CSSProperties['borderRadius'];
    lg: CSSProperties['borderRadius'];
    default: CSSProperties['borderRadius'];
  };
};

export const variables: Variables = {
  radius: {
    xs: variablesTokens.borderRadiusXs,
    sm: variablesTokens.borderRadiusSm,
    md: variablesTokens.borderRadiusMd,
    lg: variablesTokens.borderRadiusLg,
    default: variablesTokens.borderRadiusDefault,
  },
};
