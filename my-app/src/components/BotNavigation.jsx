import React, {useState} from 'react';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    position: `absolute`,
    bottom: 0,
    width: `100%`,
    padding: 0
    }
})

 function BotNavigation(props) {
  const classes = useStyles()
  const [value, setValue] = useState('home');
  const handleChange = (event, newValue) => {
    setValue(newValue)
    window.location.hash = `#${newValue}`
  }
  return (
    <BottomNavigation value={value} onChange={handleChange} className={`test1 ${classes.root}`}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Account" value="account" icon={<AccountBoxIcon />} />
    </BottomNavigation>
  )
}

export default BotNavigation;
