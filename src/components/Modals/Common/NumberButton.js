import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import PlusIcon from '../../../resources/icons/up.svg';
import MiuIcon from '../../../resources/icons/down.svg';


const NumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;


const NumberButtonItem = styled.div`
  height: 50px;
  width: 50px;
  color: ${props => props.theme.button.color};
  font-weight: ${props => props.theme.modal.header.title.weight};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.card.borderRadius};
  text-align: center;
  
  img {
    width: 46px;
    height: 46px;
  }

  &:active {
    background: ${props => props.theme.colors.gray+'20'};
  }
`;


export function NumberButton(props) {

  function handlePlus(event) {
    let newValue = props.value + (props.step || 1);
    if (props.tempMax !== undefined && newValue > props.tempMax) {
      newValue = props.tempMax;
    }
    if (newValue !== props.value && typeof props.onChange === 'function') {
      props.onChange(newValue);
    }
  }

  function handleMiu(event) {
    let newValue = props.value - (props.step || 1);
    if (props.tempMin !== undefined && newValue < props.tempMin) {
      newValue = props.tempMin;
    }
    if (newValue !== props.value && typeof props.onChange === 'function') {
      props.onChange(newValue);
    }
  }

  return (
    <NumberContainer>
      <NumberButtonItem onClick={handleMiu}><img src={MiuIcon} alt={'miu'}/></NumberButtonItem>
      <div style={{width: '32px'}}/>
      <NumberButtonItem onClick={handlePlus}><img src={PlusIcon} alt={'plus'}/></NumberButtonItem>
    </NumberContainer>
  );
}

NumberButton.propTypes = {
  /** Action triggered on slider change */
  onChange: PropTypes.func.isRequired,
  /** Value of the slider */
  value: PropTypes.number.isRequired,
  /** Value of the max */
  tempMax: PropTypes.number,
  /** Value of the min */
  tempMin: PropTypes.number,
  /** Value of the step */
  step: PropTypes.number,
};
