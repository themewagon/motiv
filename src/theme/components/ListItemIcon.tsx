import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey[600],
      minWidth: theme.spacing(2.5),
      marginRight: theme.spacing(1),
    }),
  },
};

export default ListItemIcon;