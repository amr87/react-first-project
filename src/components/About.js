import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        eius asperiores praesentium, debitis consequatur itaque nihil quibusdam
        hic. Eius dolore illo dolorum neque nobis autem fugit id harum
        necessitatibus aperiam.
      </p>
    </div>
  );
};

export default Rainbow(About);
