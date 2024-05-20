'use client';

import React from 'react';
import JcaLogin, { CredentialsType } from '@/components/JcaLogin/JcaLogin';
import { signIn } from 'next-auth/react';

const LoginWrapper: React.FC = () => {
  const handleSubmit = (credentials: CredentialsType) => {
    signIn('credentials', { callbackUrl: '/dashboard', ...credentials });
  };

  return <JcaLogin onSubmit={handleSubmit} />;
};

export default LoginWrapper;
