import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function index(props) {
  const {
    placeholder, onChange, name, label,
  } = props;
  return (
    <div className="area-container">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

index.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
