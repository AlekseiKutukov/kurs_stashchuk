import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      {/* end убирает активность ссылки home, также тут добавлен стиль прямо в компонент*/}
      <NavLink
        style={({ isActive }) => (isActive ? { color: 'lightyellow' } : {})}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink to="about">Abaot</NavLink>
      {/* тут добавили классы activeLink и a, правило которых записано в css файле */}
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink a' : 'link')}
        to="contacts"
      >
        Contacts
      </NavLink>
      <NavLink to="Courses">Courses</NavLink>
    </nav>
  );
};

export default Menu;
