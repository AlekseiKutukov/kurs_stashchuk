const About = () => {
  return (
    <div>
      <h1>About</h1>

      <div>rafce - create components markup</div>
      <div>------</div>
      <div>ctrl + F изменит все одинаковые слова</div>
      <div>------</div>
      <div>
        npm i query-string конвертирует строку запроса в объект js
        <br />
        const parsed = queryString.parse(location.search); <br />
        console.log(parsed);
        <br />
        {`//=> {foo: 'bar'}`}
      </div>
      <div>------</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default About;
