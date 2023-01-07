import { Button, Stack, Typography } from '@mui/material';

import { useEnvironment } from '@common/env';

import { useTheme } from '@components/themes';

export default function Home() {
  const { RELEASE_STAGE } = useEnvironment();
  const { theme, setTheme } = useTheme();

  return (
    <Stack height="100vh" width="100%" display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h2">{RELEASE_STAGE}</Typography>
      <Button
        onClick={() => {
          setTheme(theme.key === 'dark' ? 'light' : 'dark');
        }}
      >
        Click!
      </Button>
    </Stack>
  );
}
