import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  position: relative;
  line-height: 20px;
  font-size: 14px;
  margin: 15px 0px;
  user-select: none;
  width: max-content;
`;

const StyledSpan = styled.span`
  cursor: pointer;
  position: relative;
  display: block;
  float: left;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid lightgray;
  border-radius: 100%;
  -webkit-tap-highlight-color: transparent;
  :after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #007eff;
    transform: scale(0);
    transition: all 0.2s ease;
    opacity: 0.08;
  }
  ${StyledLabel}:hover & {
    :after {
      transform: scale(3.6);
    }
  }
`;

const StyledInput = styled.input`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  :checked + ${StyledSpan} {
    border-color: #007eff;
    :after {
      transform: scale(1);
      transition: all 0.2s cubic-bezier(0.35, 0.9, 0.4, 0.9);
      opacity: 1;
    }
  }
`;

const RadioButton = ({
  label,
  value,
  name,
  id,
  checked,
  onChange,
  ...props
}) => (
  <StyledLabel {...props}>
    <StyledInput
      {...props}
      checked={checked}
      type="radio"
      onChange={onChange}
      name={name}
      value={value}
      id={id}
    />
    <StyledSpan />
    {value}
  </StyledLabel>
);

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default RadioButton;
