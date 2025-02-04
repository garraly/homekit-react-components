import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CustomButton = styled.button`
  width: ${(props => props.fullWidth? '100%': 'auto')};
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  
  &:hover{
    background-color: #07c;
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
  }
  &:active {
    background-color: #0064bd;
    box-shadow: none;
  }
`;

export function Button(props) {
    return (
        <CustomButton onClick={props.onClick} disabled={props.disabled} fullWidth={props.fullWidth}>
            {props.title}
        </CustomButton>
    );
}

Button.propTypes = {
    /** Action triggered on click */
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    title: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
};
