import React from 'react';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import RestoreIcon from '@material-ui/icons/Restore'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    position: `absolute`,
    bottom: 0,
    width: `500px`
  }
})

 function BotNavigation(props) {
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    window.location.hash = `#${newValue}`
  }
  return (
    <BottomNavigation value={4} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={'something'} />
    </BottomNavigation>
  )
}

export default BotNavigation;
