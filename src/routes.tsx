import { Route } from 'react-router';
import { CommunityPage } from './pages/community';
import { PostsPage } from './pages/community/post';

import HomeIcon from '@mui/icons-material/Home';

export const navigation = [['/', 'Home', '', 'Forum', HomeIcon]] as any;

export const routes = [
  // <Route path="/" Component={MainPage} />,
  <Route path="/" Component={CommunityPage} />,
  <Route path="/:post" Component={PostsPage} />,
];
