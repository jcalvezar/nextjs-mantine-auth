'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/navigation';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const router = useRouter();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={() => router.push('/login')}>Login</Button>
    </Group>
  );
}
