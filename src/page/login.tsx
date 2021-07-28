import styled from 'styled-components';
import GoogleButton from '../components/common/googleButton';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  Button,
  Box,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    form: {
      height: 'auto',
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 40,
      borderRadius: 15,
    },
    title: {
      fontWeight: 500,
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography
          className={classes.title}
          variant='h2'
          align='left'
          color='primary'
          gutterBottom
        >
          Doggy Book
        </Typography>
        <Typography variant='h5'>
          Welcome to our community. Let us have fun!
        </Typography>
      </Box>
      <Box border={1} ml={20} className={classes.form}>
        <form noValidate autoComplete='off'>
          <FormControl
            variant='outlined'
            fullWidth={true}
            margin='normal'
            size='medium'
          >
            <InputLabel htmlFor='component-outlined'>Email</InputLabel>
            <OutlinedInput id='component-outlined' required labelWidth={50} />
          </FormControl>

          <FormControl
            variant='outlined'
            fullWidth={true}
            margin='normal'
            size='medium'
          >
            <InputLabel htmlFor='component-outlined'>Password</InputLabel>
            <OutlinedInput
              id='component-outlined'
              type={showPassword ? 'text' : 'password'}
              required
              labelWidth={80}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    //onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box mt={2}>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Sign In
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
            >
              Sign Up
            </Button>
            <GoogleButton />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
