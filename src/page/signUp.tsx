import { useDispatch, useSelector } from 'react-redux';
import GoogleButton from '../components/common/googleButton';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { currentUserSelector, clearState } from '../redux/slice/loginUser';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { control, handleSubmit, watch, setError } = useForm();
  const watchFields = watch(['password', 'passwordAgain', 'username']);
  const { isSuccess, isError, errorMessage } = useSelector(currentUserSelector);

  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmit = async (data) => {
    const { username } = data;
    const result = await fetch('http://localhost:8000/api/auth/checkname', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const user = await result.json();

    if (user) {
      setError('username', {
        type: 'validate',
        message: 'User name is registered',
      });
    }
    console.log(data);
    // dispatch(signUpUser({ email, password, username }));
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
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='username'
            control={control}
            defaultValue=''
            rules={{
              required: 'User name required',
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='User Name'
                variant='outlined'
                fullWidth={true}
                margin='normal'
                required
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            rules={{
              required: 'Email required',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Not a valid email',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='Email'
                variant='outlined'
                fullWidth={true}
                margin='normal'
                required
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: 'Password is required',
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type={showPassword ? 'text' : 'password'}
                required
                label='Password'
                variant='outlined'
                fullWidth={true}
                margin='normal'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />

          <Controller
            name='passwordAgain'
            control={control}
            defaultValue=''
            rules={{
              required: 'Password again is required',
              validate: (v) => v === watchFields[0] || "Passwords don't match",
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type={showPassword ? 'text' : 'password'}
                required
                label='Password Again'
                variant='outlined'
                fullWidth={true}
                margin='normal'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />

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
