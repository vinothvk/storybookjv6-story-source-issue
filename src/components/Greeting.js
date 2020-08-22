import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ title = '', message = '' }) => (
  <section>
    <h2>{title}</h2>
    <p>{message}</p>
  </section>
);
Greeting.propTypes = { title: PropTypes.string, message: PropTypes.string };

export { Greeting };
