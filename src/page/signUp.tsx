import { useDispatch, useSelector } from 'react-redux';
import GoogleButton from '../components/common/googleButton';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  currentUserSelector,
  signUpUser,
  clearState,
} from '../redux/slice/loginUser';
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
import { toast } from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSuccess, isError, errorMessage } = useSelector(currentUserSelector);

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, SetFormValues] = useState({
    email: '',
    username: '',
    password: '',
    passwordAgain: '',
  });

  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      history.push('/app');
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, passwordAgain, email, username } = formValues;

    if (password && passwordAgain && password !== passwordAgain) {
      return toast.error("Two passwords don't match!");
    }
    dispatch(signUpUser({ email, password, username }));
  };

  const handleChange = (e) => {
    SetFormValues((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
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
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <FormControl
            variant='outlined'
            fullWidth={true}
            margin='normal'
            size='medium'
          >
            <InputLabel htmlFor='component-outlined'>User Name</InputLabel>
            <OutlinedInput
              name='username'
              id='component-outlined'
              required
              labelWidth={78}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl
            variant='outlined'
            fullWidth={true}
            margin='normal'
            size='medium'
          >
            <InputLabel htmlFor='component-outlined'>Email</InputLabel>
            <OutlinedInput
              name='email'
              id='component-outlined'
              required
              labelWidth={40}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl
            variant='outlined'
            fullWidth={true}
            margin='normal'
            size='medium'
          >
            <InputLabel htmlFor='component-outlined'>Password</InputLabel>
            <OutlinedInput
              name='password'
              id='component-outlined'
              type={showPassword ? 'text' : 'password'}
              required
              labelWidth={70}
              onChange={handleChange}
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

          <FormControl
            variant='outlined'
            fullWidth={true}
            margin='normal'
            size='medium'
          >
            <InputLabel htmlFor='component-outlined'>Password Again</InputLabel>
            <OutlinedInput
              name='passwordAgain'
              id='component-outlined'
              type={showPassword ? 'text' : 'password'}
              required
              labelWidth={115}
              onChange={handleChange}
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
