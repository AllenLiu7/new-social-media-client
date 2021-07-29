import styled from 'styled-components';
import ProfileHead from '../common/profilePicName';
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

  return (
    <>
      {users.map((user, index) => (
        <ProfileHeadWrap key={index}>
          <ProfileHead
            name={user.name.first}
            src={user.picture.medium}
            key={index}
          />
        </ProfileHeadWrap>
      ))}
    </>
  );
}

const ProfileHeadWrap = styled.div`
  margin-bottom: 20px;
`;
