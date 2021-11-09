import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {GridCard} from "./GridCard";
import {ModalNumber} from './Modals';


export function NumberCard(props) {
  const [showModal, setShowModal] = useState(false);

  function handleLongPress() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  const stateLabel = `调节至 ${props.targetTemperature.toFixed(1)}`;

  return (
    <React.Fragment>
      <GridCard
        icon={props.icon}
        name={props.name}
        state={stateLabel}
        isActive={props.isActive}
        handlePress={handleLongPress}
        handleLongPress={handleLongPress}
      />
      <ModalNumber
        value={props.value}
        icon={props.icon}
        name={props.name}
        state={stateLabel}
        currentMode={props.currentMode}
        modes={props.modes}
        onModeChange={props.onModeChange}
        tempMax={props.tempMax}
        tempMin={props.tempMin}
        step={props.step}
        show={showModal}
        close={handleCloseModal} />
    </React.Fragment>
  );
}

NumberCard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  /** Current mode */
  currentMode: PropTypes.string.isRequired,
  /** Current temperature */
  currentTemperature: PropTypes.number.isRequired,
  /** Modes available */
  modes: PropTypes.array,
  /** Name of the thermostat */
  name: PropTypes.string.isRequired,
  /** Action triggered when mode change */
  onModeChange: PropTypes.func,
  /** Action triggered when temperature change */
  onTemperatureChange: PropTypes.func,
  /** Target temperature */
  targetTemperature: PropTypes.number.isRequired,
  /** Temperature max */
  tempMax: PropTypes.number,
  /** Temperature min */
  tempMin: PropTypes.number,
  icon: PropTypes.string,
  value: PropTypes.number.isRequired,
  step: PropTypes.number,
};