import { Stack, Typography } from '@mui/material';

import { useEnvironment } from '@shared/env';

export default function Home() {
  const { RELEASE_STAGE } = useEnvironment();

  return (
    <Stack height="100vh" width="100%" display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h2">{RELEASE_STAGE}</Typography>
    </Stack>
  );
}
