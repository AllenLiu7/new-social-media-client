import { useEffect, useState } from 'react';

//fetch user info base on userId

export const useUserInfo = (userId: string) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async (userId: string) => {
      const response = await fetch(
        ` http://localhost:8000/api/user?userId=${userId}`
      );
      const data = await response.json();
      setUser(data);
    };

    fetchUser(userId);
  }, [userId]);

  return { user };
};
