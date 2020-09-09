import React from 'react';

const RainBow = (Component) => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  // generate random index between 0 , 5
  const randomColors = colors[Math.floor(Math.random() * 5)];
  // generate random materialize css class
  const className = `${randomColors}-text`;
  return (props) => {
    return (
      <div className={className}>
        <Component {...props} />
        {/** passing the original props back to the Component via spread operator {...props} */}
      </div>
    );
  };
};

export default RainBow;
