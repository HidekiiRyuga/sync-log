import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createLog, updateLog } from '../../actions/logs';

const Form = ({ currentId, setCurrentId }) => {
  const [logData, setLogData] = useState({ contributor: '', title: '', entry: '', labels: '', selectedFile: '' });
  const log = useSelector((state) => (currentId ? state.logs.find((entry) => entry._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (log) setLogData(log);
  }, [log]);

  const clear = () => {
    setCurrentId(0);
    setLogData({ contributor: '', title: '', entry: '', labels: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createLog(logData));
      clear();
    } else {
      dispatch(updateLog(currentId, logData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Modifying "${log.title}"` : 'A log Entry'}</Typography>
        <TextField name="contributor" variant="outlined" label="Contributor" fullWidth value={logData.contributor} onChange={(e) => setLogData({ ...logData, contributor: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={logData.title} onChange={(e) => setLogData({ ...logData, title: e.target.value })} />
        <TextField name="entry" variant="outlined" label="Entry" fullWidth multiline minRows={4} value={logData.entry} onChange={(e) => setLogData({ ...logData, entry: e.target.value })} />
        <TextField name="labels" variant="outlined" label="Labels (coma separated)" fullWidth value={logData.labels} onChange={(e) => setLogData({ ...logData, labels: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setLogData({ ...logData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
