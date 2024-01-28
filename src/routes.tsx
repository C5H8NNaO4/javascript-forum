import { Route } from 'react-router';
import { CommunityPage } from './pages/community';
import { PostsPage } from './pages/community/post';

import HomeIcon from '@mui/icons-material/Home';


export const navigation = [
  ['/community', 'Home', '', 'My Forum', HomeIcon],
] as any;

export const routes = [
  <Route path="/community" Component={CommunityPage} />,
  <Route path="/community/:post" Component={PostsPage} />, 
];
