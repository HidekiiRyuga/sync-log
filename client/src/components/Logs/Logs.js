import React from 'react';
import { Grid, CircularProgress, Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Log from './Log/Log';
import useStyles from './styles';

const Logs = ({ setCurrentId }) => {
  const logs = useSelector((state) => state.logs);
  const classes = useStyles();

  // 1. If logs is undefined (still fetching for the first time), show spinner
  if (!logs) return <CircularProgress />;

  // 2. If logs is an empty array (loaded, but nothing is in the DB), show a message
  if (logs.length === 0) {
    return (
      <Paper className={classes.paper} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h6">
          No logs found. Start by creating one on the right! <span role="img" aria-label="notebook">📓</span>
        </Typography>
      </Paper>
    );
  }

  // 3. If there are logs, show the grid
  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {logs.map((log) => (
        <Grid key={log._id} item xs={12} sm={6} md={6}>
          <Log log={log} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Logs;