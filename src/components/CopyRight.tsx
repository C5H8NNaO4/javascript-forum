import { Link, Typography } from '@mui/material';
import { COPYRIGHT_HOLDER, COPYRIGHT_WEBSITE } from '../lib/config';

export const CopyRight = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link href={COPYRIGHT_WEBSITE}>
        © {new Date().getFullYear()} {COPYRIGHT_HOLDER}
      </Link>
    </Typography>
  );
};
