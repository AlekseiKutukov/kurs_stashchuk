import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <input type="text" name="changeUser" />

      <button onClick={() => setUser(user === 'Bogdan' ? 'Alice' : 'Bogdan')}>
        Change user
      </button>
    </>
  );
};

export default ChangeUser;
