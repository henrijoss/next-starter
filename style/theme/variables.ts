import { CSSProperties } from "react";

export type Variables = {
  radius?: {
    default?: CSSProperties["borderRadius"];
  };
};

export const variables: Variables = {
  radius: {
    default: "12px",
  },
};
