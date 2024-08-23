import { useState } from 'react';

const LoginControl = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleForSubmint = (event) => {
    event.preventDefault(); //убирает перезагрузку странице при клике кнопки

    const userData = {
      username: username,
      password: password,
    };
    // console.log(userData);
    alert(JSON.stringify(userData)); //потому-что алерт не показывает объекты
  };

  return (
    //котролируемые поля
    <>
      --------------- Лучше использовать контролируемые поля
      <h1>Login form control pole</h1>
      ----------------------
      <form onSubmit={handleForSubmint}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginControl;
