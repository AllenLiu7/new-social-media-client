import styled from 'styled-components';
import SideBarFriend from './sideBarFriend';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SideBarFriendList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://randomuser.me/api/?results=10');
      //console.log(result.data.results);
      setUsers(result.data.results);
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <>
      {users.map((user, index) => (
        <SideBarFriend
          name={user.name.first}
          src={user.picture.medium}
          key={index}
        />
      ))}
    </>
  );
}
