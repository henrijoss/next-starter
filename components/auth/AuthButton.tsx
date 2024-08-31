import { Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

export const AuthButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session?.user?.name}
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    );
  } else {
    return (
      <>
        <Button onClick={() => signIn()}>Sign In</Button>
      </>
    );
  }
};
