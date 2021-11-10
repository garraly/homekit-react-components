import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import CircularSlider from '@fseehawer/react-circular-slider';

import {ModalContainer, ModalContent, ModalHeader, ModalStyle, Picker} from './Common';
import { TemperatureIcon } from '../Common/TemperatureIcon';

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

export function ModalThermostat(props) {

  const on = props.currentMode !== 'Off';
  const stateLabel = on ? `调节至 ${props.targetTemperature.toFixed(1)}°` : '关';

  function handleSliderChange(value) {
    if (typeof props.onTemperatureChange == "function") { 
      props.onTemperatureChange(value);
    }
  }

  function handleModeChange(key, value) {
    if (typeof props.onModeChange == "function") { 
      props.onModeChange(value);
    }
  }

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
          subtitle={stateLabel}
          close={props.close}
          icon={
            <TemperatureIcon temperature={props.currentTemperature} />
          }
        />
        <ModalContent>
          <CircularSliderContainer>
            <CircularSlider
              label="温度"
              hideLabelValue={true}
              appendToValue="°"
              min={props.tempMin}
              max={props.tempMax}
              width={250}
              knobPosition="bottom"
              knobColor="#005a58"
              progressColorFrom="#75D5E2"
              progressColorTo="#ED6C35"
              progressSize={24}
              trackColor="#eeeeee"
              trackSize={24}
              dataIndex={props.targetTemperature - props.tempMin}
              onChange={handleSliderChange}
              hideKnob={!on}
            />
            <LabelContainer>
              <LabelTitle>{on ? "调节至" : "现在"}</LabelTitle>
              <LabelTemperature>{on ? props.targetTemperature.toFixed(1) : props.currentTemperature.toFixed(1)}°</LabelTemperature>
            </LabelContainer>
          </CircularSliderContainer>
          <div onTouchStart={(e)=>{e.preventDefault()}}>
            <Picker height={100}/>
            {/*<Picker*/}
            {/*  height={100}*/}
            {/*  optionGroups={{*/}
            {/*    mode: props.modes,*/}
            {/*  }}*/}
            {/*  valueGroups={{*/}
            {/*    mode: props.currentMode,*/}
            {/*  }}*/}
            {/*  onChange={handleModeChange} />*/}
          </div>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

ModalThermostat.propTypes = {
  /** Method to close the modal */
  close: PropTypes.func.isRequired,
  /** Current mode */
  currentMode: PropTypes.string,
  /** Current temperature */
  currentTemperature: PropTypes.number,
  /** List of modes available */
  modes: PropTypes.array,
  /** Name of the thermostat */
  name: PropTypes.string.isRequired,
  /** Target temperature */
  targetTemperature: PropTypes.number,
  /** Action triggered on temperature change */
  onTemperatureChange: PropTypes.func,
  /** Action triggered on mode change */
  onModeChange: PropTypes.func,
  /** State of the modal */
  show: PropTypes.bool.isRequired,
  /** State label of the thermostat */
  state: PropTypes.string.isRequired,
  /** Temperature max */
  tempMax: PropTypes.number,
  /** Temperature min */
  tempMin: PropTypes.number,
};
