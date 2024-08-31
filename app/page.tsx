'use client';

import { Box, Button, IconButton, Stack, styled, Typography, TypographyVariant } from '@mui/material';
import { PencilIcon } from '@primer/octicons-react';

import { typography } from '@/style/theme/typography';
import { AuthButton } from '@/components/auth';

const StyledBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    gap: '8px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, minmax(0, 140px))',
  }),
);

export default function Home() {
  return (
    <main>
      <AuthButton />
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
          <Button color="error">Error</Button>
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
          <Button variant="contained" color="error">
            Error
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
          <Button variant="outlined" color="error">
            Error
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
          <Button size="small" variant="contained" color="error">
            Error
          </Button>
        </StyledBox>
        <div>
          <IconButton size="small" color="primary">
            <PencilIcon />
          </IconButton>
          <IconButton size="small" color="secondary">
            <PencilIcon />
          </IconButton>
          <IconButton size="small" color="info">
            <PencilIcon />
          </IconButton>
          <IconButton size="small" color="success">
            <PencilIcon />
          </IconButton>
          <IconButton size="small" color="warning">
            <PencilIcon />
          </IconButton>
          <IconButton size="small" color="error">
            <PencilIcon />
          </IconButton>
        </div>
        <div>
          <IconButton color="primary">
            <PencilIcon size={16} />
          </IconButton>
          <IconButton color="secondary">
            <PencilIcon size={16} />
          </IconButton>
          <IconButton color="info">
            <PencilIcon size={16} />
          </IconButton>
          <IconButton color="success">
            <PencilIcon size={16} />
          </IconButton>
          <IconButton color="warning">
            <PencilIcon size={16} />
          </IconButton>
          <IconButton color="error">
            <PencilIcon size={16} />
          </IconButton>
        </div>
        <div>
          <IconButton size="large" color="primary">
            <PencilIcon size={24} />
          </IconButton>
          <IconButton size="large" color="secondary">
            <PencilIcon size={24} />
          </IconButton>
          <IconButton size="large" color="info">
            <PencilIcon size={24} />
          </IconButton>
          <IconButton size="large" color="success">
            <PencilIcon size={24} />
          </IconButton>
          <IconButton size="large" color="warning">
            <PencilIcon size={24} />
          </IconButton>
          <IconButton size="large" color="error">
            <PencilIcon size={24} />
          </IconButton>
        </div>
      </Stack>
    </main>
  );
}
