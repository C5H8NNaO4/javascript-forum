import { Card, CardContent, CardHeader, Container, Paper } from '@mui/material';
import Markdown from 'react-markdown';
import { Navigate } from 'react-router';
export const MainPage = () => {
  return (
    <Container maxWidth="sm">
      <Card sx={{ pt: '15vh' }}>
        <CardHeader title="Welcome to your very own community." />
        <CardContent>
          <Markdown>
            {`
Go to [/forum](/forum) to see the community page.
`}
          </Markdown>
        </CardContent>
      </Card>
      <Navigate replace to={'forum'} />
    </Container>
  );
};
