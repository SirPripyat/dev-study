import { useState } from 'react';
import { Gallery } from './components';

const App = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <Gallery />
      <p>State: {state}</p>
      <button
        type={'button'}
        onClick={() => {
          setState(state + 1);
          setState(state + 1);
          setState(state + 1);
        }}
      >
        +3
      </button>
    </>
  );
};

export default App;
