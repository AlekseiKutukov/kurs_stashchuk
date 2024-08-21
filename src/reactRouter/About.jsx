import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to home</Link>
      <br />
      <Link to="/contacts">Contacts</Link>
      <div>rafce - create components markup</div>
      <div>ctrl + F изменит все одинаковые слова</div>
    </div>
  );
};

export default About;
