import { useContext } from 'react';
import UserContext from '../../context/UserContext';

function UserInfo() {
  const user = useContext(UserContext);
  // console.log(user);
  return (
    // consumer - прочитать данные из контекста
    // <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>

    <h1>{user.user}</h1>
  );
}

export default UserInfo;
