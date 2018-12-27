import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function index(props) {
  const {
    type, placeholder, onChange, name, label,
  } = props;
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} name={name} />
    </div>
  );
}

index.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
