import { AddCircleOutline } from '@mui/icons-material';
import {
  Box,
  Chip,
  ClickAwayListener,
  IconButton,
  Popover,
} from '@mui/material';
import { useComponent } from '@state-less/react-client';
import { useRef, useState } from 'react';

export const ReactionIcons = {
  love: () => <Box sx={{ fontSize: 18, ml: 0.5 }}>❤️</Box>,
  laugh: () => <Box sx={{ fontSize: 18, ml: 0.5 }}>😂</Box>,
  'thumbs-up': () => <Box sx={{ fontSize: 18, ml: 0.5 }}>👍</Box>,
  'thumbs-down': () => <Box sx={{ fontSize: 18, ml: 0.5 }}>👎</Box>,
};

const availableReactions = ['love', 'laugh', 'thumbs-up', 'thumbs-down'];

export const Reactions = ({ data }) => {
  const [component, { error, refetch }] = useComponent(data?.component, {
    data,
  });
  const { voted, reactions } = component?.props || {};
  const reactionKeys = Object.keys(component?.props?.reactions || {});
  const [anchor, setAnchor] = useState(false);
  const iconButtonRef = useRef(null);
  return (
    <>
      {reactionKeys
        .filter((key) => reactions[key] > 0 || voted === key)
        .map((reaction) => {
          const Icon = ReactionIcons[reaction];
          return (
            <Chip
              icon={<Icon />}
              color={voted === reaction ? 'success' : undefined}
              disabled={voted !== null && voted !== reaction}
              onClick={() => component?.props?.react(reaction)}
              label={reactions[reaction] || '0'}
            />
          );
        })}

      {!voted && (
        <IconButton
          ref={iconButtonRef}
          color={anchor ? 'success' : 'default'}
          onClick={(e) => setAnchor(!anchor)}
        >
          {<AddCircleOutline />}
        </IconButton>
      )}
      <ReactionPopper
        id={`reactions-${component?.key}`}
        anchor={anchor ? iconButtonRef.current : null}
        onClose={() => setAnchor(false)}
        react={component?.props?.react}
      />
    </>
  );
};

const ReactionPopper = ({ anchor, id, onClose, react }) => {
  return !anchor ? null : (
    <Popover
      id={id}
      open={Boolean(anchor)}
      anchorEl={anchor}
      sx={{ zIndex: 1000000000 }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          {availableReactions.map((reaction) => {
            const Icon = Icons[reaction];
            return (
              <IconButton onClick={() => react(reaction)}>
                {<Icon />}
              </IconButton>
            );
          })}
        </Box>
      </ClickAwayListener>
    </Popover>
  );
};
