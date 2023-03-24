import React, { useCallback } from 'react';
import {
  Box,
  Modal,
  Typography,
  styled,
  Card,
  Avatar,
  FormControlLabel,
  Checkbox,
  Button, Grid, FormControl, FormLabel, OutlinedInput, FormHelperText,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, Field } from 'react-final-form';
import axios from 'axios';
import { toast } from 'react-toastify';

export function LoginModal({ open, onClose }) {
  const onSubmit = useCallback(async (value) => {
    try {
      await axios.post('/auth/login', value);
      toast.success('Login successful');
      onClose();
    } catch (err) {
      toast.error('Something went wrong, try again later');
    }
  }, []);

  const validate = useCallback((value) => {
    const error = {};
    if (!value.username) {
      error.username = 'User Name is required';
    }
    if (!value.password) {
      error.password = 'Password is required';
    }
    return error;
  }, []);

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <StyledCard>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', margin: '0 auto' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, errors }) => (
              <>
                <Grid container spacing={2}>
                  <Field
                    name="username"
                    render={({ input, meta }) => (
                      <Grid item xs={12}>
                        <FormControl fullWidth required error={errors.username && meta.touched}>
                          <FormLabel>
                            <Typography>User Name</Typography>
                          </FormLabel>
                          <OutlinedInput {...input} />
                          {errors.username && meta.touched && (
                          <FormHelperText>
                            {errors.username}
                          </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <Grid item xs={12}>
                        <FormControl fullWidth required error={errors.password && meta.touched}>
                          <FormLabel>
                            <Typography>
                              Password
                            </Typography>
                          </FormLabel>
                          <OutlinedInput type="password" {...input} autoComplete="off" />
                          {errors.password && meta.touched && (
                          <FormHelperText>
                            {errors.password}
                          </FormHelperText>
                          )}
                        </FormControl>
                      </Grid>
                    )}
                  />
                </Grid>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{
                    mt: 1,
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <Typography>Forgot password?</Typography>
                <Typography>Don't have an account? Sign Up</Typography>
              </>
            )}
          />
        </Box>
      </StyledCard>
    </Modal>
  );
}

const StyledCard = styled(Card)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
}));
