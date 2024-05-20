import React from 'react';

type MyComponentProps = {
  size: number;
};

const JcaLogo: React.FC<MyComponentProps> = ({ size }) => {
  return <img src="/jcalogo2.svg" height={size} />;
};

export default JcaLogo;
