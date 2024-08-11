import React, { useState } from 'react';

function MyUseState() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>like</button>
      {count}
    </>
  );
}

export default MyUseState;
