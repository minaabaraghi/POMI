import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Register from './Register';

function PageHeader({getUserAfterPUT}:{getUserAfterPUT:any}) {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          lists
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your recent usres
        </Typography>
      </Grid>
      <Grid item>
      <Register getUserAfterPUT={getUserAfterPUT}/>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
