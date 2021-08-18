import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { currentUserSelector } from '../../redux/slice/loginUser';
import { Card } from '../common/styled-components/card';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';
const PF = process.env.PUBLIC_FOLDER;

export default function EditBar() {
  const { currentUser } = useSelector(currentUserSelector);
  const { username, email, city, profilePicture } = currentUser;
  const { control, handleSubmit, register } = useForm();
  const [file, setFile] = useState(PF + profilePicture);

  const handleProfilePicChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Card alignItems='center'>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h4' gutterBottom>
              User Info
            </Typography>
            {/* username --------------------------------------------------------------------------------------------*/}
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
            <ProfilePicFormWrapper>
              <Typography variant='h7' gutterBottom>
                Profile Picture
              </Typography>
              <ProfilePicWrapper>
                <EditImg src={file} alt='profile' height='100px' />
                <ButtonWrapper>
                  <EditButton>Edit</EditButton>
                  <input
                    {...register('image')}
                    style={{ display: 'none' }}
                    type='file'
                    accept='.png,.jpeg,.jpg'
                    onChange={handleProfilePicChange}
                  />
                </ButtonWrapper>
              </ProfilePicWrapper>
            </ProfilePicFormWrapper>
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
  height: auto;
  justify-content: center;
  padding-top: 10px;
`;

const FormWrapper = styled.div`
  padding: 40px 50px;
  width: 70%;
  height: auto;
`;

const ProfilePicFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ProfilePicWrapper = styled.div`
  position: relative;
  width: auto;
  margin-top: 20px;
  align-self: center;
`;

const ButtonWrapper = styled.label`
  position: absolute;
  top: 0;
  left: 100px;
`;

const EditButton = styled.div`
  cursor: pointer;
`;

const EditImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
