import { Route } from 'react-router';
import { CommunityPage } from './pages/community';
import { PostsPage } from './pages/community/post';

import HomeIcon from '@mui/icons-material/Home';
import { MainPage } from './pages';

export const navigation = [
  ['/', 'Home', '', 'JavaScript Forum', HomeIcon],
  ['/forum', 'Forumm', '', 'JavaScript Forum', HomeIcon],
] as any;

export const routes = [
  <Route path="/" Component={MainPage} />,
  <Route path="/forum" Component={CommunityPage} />,
  <Route path="/forum/:post" Component={PostsPage} />,
];
