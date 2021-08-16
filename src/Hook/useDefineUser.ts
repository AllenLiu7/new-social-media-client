import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { _getUser } from '../service/api/user';

export const useDefineUser = (currentUser) => {
  const [user, setUser] = useState({});
  const [isCurrentUser, setIsCurrentUser] = useState(true);

  const { userId: paramId } = useParams();

  useEffect(() => {
    const defineUser = async () => {
      if (currentUser._id !== paramId) {
        const response = await _getUser(paramId);
        const user = response.data;
        setIsCurrentUser(false);
        return setUser(user);
      }
      const user = currentUser;
      setIsCurrentUser(true);
      setUser(user);
    };
    defineUser();
  }, [currentUser, paramId]);

  return { user, isCurrentUser, paramId };
};
