import { useEnvironment } from '@shared/env';

export default function Home() {
  const { RELEASE_STAGE } = useEnvironment();

  return <div>{RELEASE_STAGE}</div>;
}
