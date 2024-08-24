import UserContext from '../../context/UserContext';

function UserInfo() {
  return (
    // consumer - прочитать данные из контекста
    <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}

export default UserInfo;
