import { useEffect, useState } from 'react';
import './App.css';
import MyUseState from './components/MyUseState';
import MyProps from './components/MyProps';
import MyUseStateProps_Button from './components/MyUseStateProps_Button';
import MyUseStateProps_Counter from './components/MyUseStateProps_Counter';
import Persons from './components/map_array_of_objects_Persons';
import ResetButton from './components/ResetButton';
import Card from './components/Card';
import Login from './components/Login';
import LoginControl from './components/LoginControlPole';
import Wrapper from './components/Wrapper';
import Posts from './components/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './reactRouter/Home';
import About from './reactRouter/About';
import NotFound from './reactRouter/NotFound';
import Contacts from './reactRouter/Contacts';
import MainLayout from './reactRouter/layouts/MainLayout';

const texts = ['Click me 1', 'Click me 2', 'Click me 3', 'Click me 4'];

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  console.log('App render');
  console.log(todo);

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* показывает этот компонет, для пути path="/" */}
            <Route index={true} element={<Home />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            {/* маршрут по умолчанию (все не существующие страницы)*/}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Posts />
        {todo && todo.title}
        <Wrapper color="lightblue">
          <h2>Text inside of the Wrapper</h2>
        </Wrapper>
        <Wrapper color="red">
          <h2>Text inside of the Wrapper two</h2>
        </Wrapper>
        <LoginControl />
        <Login />
        <Card />
        <MyUseState />
        <MyProps name="taja" age={3} />
        <MyUseStateProps_Counter count={count} />
        {texts.map((text, index) => {
          // console.log(index);
          return (
            <MyUseStateProps_Button
              onClick={incrementCount}
              text={text}
              key={index}
            />
          );
        })}
        {/* тоже самое выше через map
      <MyUseStateProps_Button onClick={incrementCount} text={'Click me'} />
      <MyUseStateProps_Button onClick={incrementCount} text={'Click me 2'} />
      <MyUseStateProps_Button onClick={incrementCount} text={'Click me 3'} /> 
      <MyUseStateProps_Button onClick={incrementCount} text={'Click me 4'} /> */}
        <ResetButton count={count} func={resetCount} />
        <div className="person_all">
          <Persons />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
