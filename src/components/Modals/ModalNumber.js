import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {CircleProgress} from 'react-gradient-progress';
import { ModalContainer, ModalContent, ModalHeader, ModalStyle, NumberButton} from './Common';
import styled from '@emotion/styled';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html');

const CircularSliderContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const LabelContainer = styled.div`
  position: absolute;
  top: 85px;
  left: 70px;
`;
const LabelTitle = styled.div`
  color: #F29F41;
  font-size: 14px;
  font-weight: 600;
`;
const LabelTemperature = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

export function ModalNumber(props) {


  useEffect(()=>{
    if (props.show) {
      document.body.style.overflow = 'hidden';
      return ()=>{
        document.body.style.overflow = '';
      };
    }
  },[props.show]);

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.close}
      contentLabel="Example Modal"
      style={ModalStyle}
    >
      <ModalContainer>
        <ModalHeader
          title={props.name}
          subtitle={props.stateLabel}
          close={props.close}
          icon={props.icon}
        />
        <ModalContent>
          <CircularSliderContainer>
            {/*<CircularSlider*/}
            {/*    label={props.name}*/}
            {/*    hideLabelValue={true}*/}
            {/*    appendToValue={props.unit}*/}
            {/*    min={props.tempMin}*/}
            {/*    max={props.tempMax}*/}
            {/*    width={250}*/}
            {/*    knobPosition="bottom"*/}
            {/*    knobColor="#005a58"*/}
            {/*    progressColorFrom="#75D5E2"*/}
            {/*    progressColorTo="#ED6C35"*/}
            {/*    progressSize={24}*/}
            {/*    trackColor="#eeeeee"*/}
            {/*    dataIndex={props.value - props.tempMin}*/}
            {/*    trackSize={24}*/}
            {/*    onChange={()=>{}}*/}
            {/*    hideKnob={true}*/}
            {/*/>*/}
            <CircleProgress percentage={50} width={250} fontColor={'transparent'} primaryColor={["#75D5E2", "#ED6C35"]} strokeWidth={24}/>
            <LabelContainer>
              <LabelTitle>点击上下按钮调整</LabelTitle>
              <LabelTemperature>{props.value}{props.unit}</LabelTemperature>
            </LabelContainer>
          </CircularSliderContainer>
          <NumberButton onChange={() => {}} value={10} tempMax={props.tempMax} tempMin={props.tempMin} step={props.step}/>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

ModalNumber.propTypes = {
  /** Brightness value */
  brightness: PropTypes.number,
  /** Method to close the modal */
  close: PropTypes.func.isRequired,
  /** Name of the light */
  name: PropTypes.string.isRequired,
  /** Action triggered on onChange number */
  onChange: PropTypes.func,
  /** State of the modal */
  show: PropTypes.bool.isRequired,
  /** description of the modal */
  stateLabel: PropTypes.string,
  /** description of the modal */
  icon: PropTypes.string,
  tempMax: PropTypes.number,
  tempMin: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
};
