import React from 'react';

import AuthContext from '~/contexts/JWTContext';

const useAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
}

export default useAuth