import { AppShell } from '@mantine/core';
import { CustomHeader } from 'components/common';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div>
      <AppShell padding="md" header={CustomHeader()}>
        <Outlet />
      </AppShell>
    </div>
  );
}
