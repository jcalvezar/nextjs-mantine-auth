export const saltAndHashPassword = (password: any) => {
  return password;
};

export const getUserFromDb = async (email: string | unknown, password: string) => {
  console.log('Credenciales', email, password);
  const User =
    password === '12345'
      ? {
          name: 'John',
        }
      : null;

  return User;
};
