import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import GoogleButton from '../components/common/googleButton';
import {
  clearState,
  currentUserSelector,
  loginUser,
} from '../redux/slice/loginUser';


export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isSuccess, isError, errorMessage } = useSelector(currentUserSelector);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, SetFormValues] = useState({
    email: 'peter@gmal.com',
    password: '123123',
  });

  useEffect(() => {
    if (isError) {
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
    dispatch(loginUser(formValues));
    // console.log(formValues.email);
    // console.log(formValues.password);
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
            <InputLabel htmlFor='component-outlined'>Email</InputLabel>
            <OutlinedInput
              id='component-outlined'
              name='email'
              required
              labelWidth={50}
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
              id='component-outlined'
              name='password'
              type={showPassword ? 'text' : 'password'}
              required
              labelWidth={80}
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
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Sign In
            </Button>
          </Box>
          <Box mt={2}>
            <Link to='/signup'>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
              >
                Sign Up
              </Button>
            </Link>
            <GoogleButton />
          </Box>
        </form>
      </Box>
    </Box>
  );
}
