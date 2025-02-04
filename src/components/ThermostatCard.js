import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ModalThermostat } from './Modals';
import { TemperatureIcon } from './Common/TemperatureIcon';
import {GridCard} from "./cards/GridCard";


export function ThermostatCard(props) {
  const [showModal, setShowModal] = useState(false);

  function handleLongPress() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  const stateLabel = props.currentMode !== 'Off' ?
    `调节至 ${props.targetTemperature.toFixed(1)}°` :
    '关';

  return (
    <React.Fragment>
      <GridCard
        icon={
          <TemperatureIcon temperature={props.currentTemperature} />
        }
        name={props.name}
        state={stateLabel}
        isActive={props.currentMode !== 'Off'}
        handlePress={handleLongPress}
        handleLongPress={handleLongPress}
      />
      <ModalThermostat
        name={props.name}
        state={stateLabel}
        currentMode={props.currentMode}
        modes={props.modes}
        onModeChange={props.onModeChange}
        tempMax={props.tempMax}
        tempMin={props.tempMin}
        currentTemperature={props.currentTemperature}
        targetTemperature={props.targetTemperature}
        onTemperatureChange={props.onTemperatureChange}
        show={showModal}
        close={handleCloseModal}
        shouldConfirm={props.shouldConfirm}/>
    </React.Fragment>
  );
}

ThermostatCard.propTypes = {
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
  /** callback onchange just click confirm button **/
  shouldConfirm: PropTypes.bool,
};

ThermostatCard.defaultProps = {
  modes: ['关', '指定', '自动'],
  tempMax: 30,
  tempMin: 6,
};
