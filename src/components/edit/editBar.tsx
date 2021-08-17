import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { currentUserSelector } from '../../redux/slice/loginUser';
import { Card } from '../common/styled-components/card';

export default function EditBar() {
  const { currentUser } = useSelector(currentUserSelector);
  const { username, email, city } = currentUser;
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Card>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h4' gutterBottom>
              User Info
            </Typography>
            <Controller
              name='username'
              control={control}
              defaultValue={username}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='User Name'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* email --------------------------------------------------------------------------------------------*/}
            <Controller
              name='email'
              control={control}
              defaultValue={email}
              rules={{
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Not a valid email',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Email'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* city --------------------------------------------------------------------------------------------*/}
            <Controller
              name='city'
              control={control}
              defaultValue={city || ''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='City'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* from --------------------------------------------------------------------------------------------*/}
            <Controller
              name='from'
              control={control}
              defaultValue={city || ''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='From'
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            {/* relationship --------------------------------------------------------------------------------------------*/}
            <Controller
              name='relation'
              control={control}
              defaultValue={city || null}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl
                  variant='outlined'
                  fullWidth={true}
                  margin='normal'
                >
                  <InputLabel id='demo-simple-select-outlined-label'>
                    Relationship
                  </InputLabel>
                  <Select
                    label='Relationship'
                    id='demo-simple-select-filled'
                    value={value || ''}
                    onChange={onChange}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Single</MenuItem>
                    <MenuItem value={2}>In Relation</MenuItem>
                    <MenuItem value={3}>Married</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Box mt={2}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Save
              </Button>
            </Box>
          </form>
        </FormWrapper>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  flex: 8;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

const FormWrapper = styled.div`
  padding: 40px 50px;
  width: 70%;
`;
