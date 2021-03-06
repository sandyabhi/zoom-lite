import React, { useContext } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocketContext } from '../SocketContext'

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '1px solid black',
      margin: '10px',
      backgroundColor:'grey',
      boxShadow: '0px 5px 15px 5px purple',
    },
  }));
  
function VideoPlayer() {
    const { name, callAccepted, myVideo, callEnded, stream, call, userVideo } = useContext(SocketContext)
    const classes = useStyles();
    return (
        <Grid container className={classes.gridContainer}>
            {/* My Video */}
            {stream &&
                (<Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>)}


            {/* Other User Video */}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'Name'} </Typography>
                        <video playsInline ref={userVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>)}
        </Grid>
    )
}

export default VideoPlayer
