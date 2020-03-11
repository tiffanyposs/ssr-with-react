import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>I'm the best home component</div>
      <button onClick={() => console.log('Hi there')}>Click Me</button>
    </div>
  );
}

export default {
  component: HomePage
};
