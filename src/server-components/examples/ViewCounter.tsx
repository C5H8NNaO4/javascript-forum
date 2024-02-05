import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupIcon from '@mui/icons-material/Group';

import { useComponent } from '@state-less/react-client';
import {
  Box,
  Tooltip,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

export type ViewCounterProps = {
  componentKey: string;
  data?: any;
  skip?: boolean;
  plainText?: boolean;
  clientOnly?: boolean;
};
export const ViewCounter = ({
  componentKey,
  data,
  skip,
  plainText,
  clientOnly,
}: ViewCounterProps) => {
  const [component, { loading }] = useComponent(componentKey, {
    skip,
    data,
  });

  if (plainText) return `${component?.props?.clients} views`;

  return (
    <Tooltip title="Views" placement="left">
      <Box
        sx={{ display: 'flex', justifyContent: 'start', width: 'min-content' }}
      >
        {!clientOnly && (
          <ListItem dense>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText>
              {loading ? '-' : component?.props?.views}
            </ListItemText>
          </ListItem>
        )}
        <ListItem dense>
          <ListItemIcon>
            {clientOnly ? <VisibilityIcon /> : <GroupIcon />}
          </ListItemIcon>
          <ListItemText>
            {loading ? '-' : component?.props?.clients}
          </ListItemText>
        </ListItem>
      </Box>
    </Tooltip>
  );
};
