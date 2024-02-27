import { Link, Typography, BoxProps } from '@mui/material';
import {COPYRIGHT_HOLDER, COPYRIGHT_WEBSITE}from '../lib/config'
export const Copyright = ({
  sx,
  /** The color of the surrounding background */
  backgroundColor = 'primary',
}: {
  sx?: BoxProps['sx'];
  backgroundColor: 'primary' | 'secondary';
}) => {
  return (
    <Link href={COPYRIGHT_WEBSITE}>
      <Typography
        sx={{
          color: (theme) =>
            theme.palette.getContrastText(theme.palette[backgroundColor]?.main),
          ...sx,
        }}
      >{`© ${new Date().getFullYear()} ${COPYRIGHT_HOLDER}`}</Typography>
    </Link>
  );
};
