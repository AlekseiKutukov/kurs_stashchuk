import { useState } from 'react';
const InputField = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const userData = {
    name: name,
    age: age,
  };
  console.log(userData);

  return (
    <div className="input__name_age">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
};
export default InputField;
