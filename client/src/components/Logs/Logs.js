import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Log from './Log/Log';
import useStyles from './styles';

const Logs = ({ setCurrentId }) => {
  const logs = useSelector((state) => state.logs);
  const classes = useStyles();

  return (
    !logs.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {logs.map((log) => (
          <Grid key={log._id} item xs={12} sm={6} md={6}>
            <Log log={log} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Logs;
