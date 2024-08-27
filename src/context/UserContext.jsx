import { createContext } from 'react';

// const UserContext = createContext('Значение по умолчанию');

const UserContext = createContext({
  user: '',
  setUser: () => {}, //чтобы избежать ошибок
});
export default UserContext;
