import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { GridCard } from './GridCard';
import {ModalPicker} from '../Modals';


export function PickerCard(props) {
  // Modal
  const [showModal, setShowModal] = useState(false);
  function handleLongPress() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  const stateLabel = '';

  return (
    <React.Fragment>
      <GridCard
        icon={
          props.icon
        }
        name={props.name}
        state={stateLabel}
        isActive={props.isActive}
        handlePress={handleLongPress}
        handleLongPress={handleLongPress}
      />
      <ModalPicker
        name={props.name}
        state={stateLabel}
        show={showModal}
        close={handleCloseModal}
        icon={props.icon}
        value={{test: 'auto'}}
        optionGroups={{test: ['off','on','auto']}}
        shouldConfirm={props.shouldConfirm}
        options={[{label: '关',value: 'off'}, {label: 'on',value: 'on'}, {label: 'auto',value: 'auto'}]}/>
    </React.Fragment>
  );
}

PickerCard.propTypes = {
  /** Custom icon for light */
  icon: PropTypes.element,
  /** Action triggered on change */
  onChange: PropTypes.func,
  /** State of the light */
  isActive: PropTypes.bool.isRequired,
  /** Name of the light */
  name: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  optionGroups: PropTypes.object.isRequired,
  /** callback onchange just click confirm button **/
  shouldConfirm: PropTypes.bool,
};
