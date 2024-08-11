const Login = () => {
  const handleForSubmint = (event) => {
    event.preventDefault(); //убирает перезагрузку странице при клике кнопки

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(userData);
    alert(JSON.stringify(userData)); //потому-что алерт не показывает объекты
  };
  return (
    //некотролируемые поля
    <>
      __________________________
      <h1>Login form no control pole</h1>
      <form onSubmit={handleForSubmint}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      ____________________________
    </>
  );
};

export default Login;
