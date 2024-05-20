'use client';

import React, { useState } from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from './JcaLogin.module.css';

export type CredentialsType = {
  email: string;
  password: string;
};

type JcaLoginProps = {
  onSubmit: (credentials: CredentialsType) => void;
};

const JcaLogin: React.FC<JcaLoginProps> = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState<CredentialsType>({ email: '', password: '' });

  const handleChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: event.currentTarget.value });
  };

  const handleChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: event.currentTarget.value });
  };

  const handleSubmit = async () => {
    onSubmit({ ...credentials });
    //signIn('credentials', { callbackUrl: '/dashboard', ...credentials });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Mantine!
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          onChange={handleChangeEmail}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          onChange={handleChangePassword}
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={handleSubmit}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default JcaLogin;
