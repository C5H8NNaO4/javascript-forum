import { Route } from 'react-router';
import { CommunityPage } from './pages/community';
import { PostsPage } from './pages/community/post';

import HomeIcon from '@mui/icons-material/Home';
import { MainPage } from './pages';

export const navigation = [
  ['/', 'Home', '', 'JavaScript', HomeIcon],
  ['/forum', 'Forum', '', 'JavaScript', HomeIcon],
] as any;

export const routes = [
  // <Route path="/" Component={MainPage} />,
  <Route path="/" Component={CommunityPage} />,
  <Route path="/:post" Component={PostsPage} />,
];
