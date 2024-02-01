import './App.css';
import { CommunityPage } from './pages/community';
import { ApolloProvider } from '@apollo/client';
import client, { localClient } from './lib/client';
import { StateProvider } from './provider/StateProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from './provider/ThemeProvider';
import { Layout } from './container/Layout';
import { AuthProvider } from '@state-less/react-client';

function App() {
  return (
    <ApolloProvider
      client={import.meta.env.MODE === 'production' ? client : client}
    >
      <AuthProvider>
        <StateProvider>
          <ThemeProvider>
            <Router>
              <Layout />
            </Router>
          </ThemeProvider>
        </StateProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
