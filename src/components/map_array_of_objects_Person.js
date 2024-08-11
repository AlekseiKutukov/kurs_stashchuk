function Person(props) {
  const { id, firstName, lastName, email, img } = props;
  //console.log(props)
  return (
    <div className="person">
      <img src={img} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}

export default Person;
