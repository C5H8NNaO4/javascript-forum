import { Route } from 'react-router';
import { CommunityPage } from './pages/community';
import { PostsPage } from './pages/community/post';

import HomeIcon from '@mui/icons-material/Home';
import { MainPage } from './pages';


export const navigation = [
  ['/', 'Home', '', 'My Forum', HomeIcon],
  ['/community', 'Community', '', 'My Forum', HomeIcon],
] as any;

export const routes = [
  <Route path="/" Component={MainPage} />,
  <Route path="/community" Component={CommunityPage} />,
  <Route path="/community/:post" Component={PostsPage} />, 
];
