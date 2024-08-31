import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { getServerSession } from 'next-auth';

import SessionProvider from '@/components/auth/SessionProvider';
import { theme } from '@/style/theme';

export const Providers = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession();

  return (
    <SessionProvider session={session}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </SessionProvider>
  );
};
