"use client";

import {
  Box,
  Button,
  Stack,
  styled,
  Typography,
  TypographyVariant,
} from "@mui/material";

import { typography } from "@/style/theme/typography";

const StyledBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    gap: "8px",
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 140px))",
  }),
);

export default function Home() {
  return (
    <main>
      <Stack gap={2}>
        <Stack gap={2}>
          {Object.keys(typography).map((typo) => (
            <Typography key={typo} variant={typo as TypographyVariant}>
              Typography {typo}
            </Typography>
          ))}
        </Stack>
        <StyledBox>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
        </StyledBox>
        <StyledBox>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
        </StyledBox>
        <StyledBox>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
        </StyledBox>
        <StyledBox>
          <Button size="small" variant="contained" color="primary">
            Primary
          </Button>
          <Button size="small" variant="contained" color="secondary">
            Secondary
          </Button>
          <Button size="small" variant="contained" color="info">
            Info
          </Button>
          <Button size="small" variant="contained" color="success">
            Success
          </Button>
          <Button size="small" variant="contained" color="warning">
            Warning
          </Button>
        </StyledBox>
      </Stack>
    </main>
  );
}
