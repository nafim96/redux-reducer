import React, { useRef, useState } from "react";

const ExploreRef = () => {
  const userNameRef = useRef(null);
  const [count, setCount] = useState(null);

  const handleClick = () => {
    userNameRef.current.focus();
  };
  return (
    <div>
      <input ref={userNameRef} type="text" />
      <button onClick={handleClick}>Get Focus</button>
      <>
        Count: {count}
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </>
    </div>
  );
};

export default ExploreRef;
