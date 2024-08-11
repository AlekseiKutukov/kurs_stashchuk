import Person from './map_array_of_objects_Person';
import persons from '../data/persons';

function Persons() {
  return persons.slice(0, 6).map((person) => {
    //   const { id, firstName, lastName, email, img } = person; //деструктуризация
    return (
      <Person
        key={person.id}
        {...person} //спред оператор
        //тоже самое сверху
        // id={id}
        // firstName={firstName}
        // lastName={lastName}
        // email={email}
        // img={img}
      />
    );
  });
}

export default Persons;
