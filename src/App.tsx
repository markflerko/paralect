import { AppShell } from '@mantine/core';
import './App.css';
import { CustomHeader } from './components/Header';

function App() {
  return (
    <AppShell padding="md" header={CustomHeader()}>
      {/* Your application here */}
    </AppShell>
  );
}

export default App;
