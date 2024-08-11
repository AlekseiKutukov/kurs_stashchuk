function Wrapper(props) {
  //console.log(props);
  //тут можно объявить переменную style и накидать туда стилей css, затем имя переменной кинуть в строку ниже
  return <div style={{ backgroundColor: props.color }}>{props.children}</div>;
}
export default Wrapper;
