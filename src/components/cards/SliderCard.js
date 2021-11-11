import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {GridCard} from "./GridCard";
import {ModalSlider} from '../Modals';


export function SliderCard(props) {
    const [showModal, setShowModal] = useState(false);

    function handleLongPress() {
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
    }


    return (
        <React.Fragment>
            <GridCard
                icon={props.icon}
                name={props.name}
                state={props.stateLabel}
                isActive={props.isActive}
                handlePress={handleLongPress}
                handleLongPress={handleLongPress}
            />
            <ModalSlider
                value={props.value}
                icon={props.icon}
                name={props.name}
                step={props.step}
                show={showModal}
                close={handleCloseModal}
                shouldConfirm={props.shouldConfirm}
                stateLabel={props.stateLabel}/>
        </React.Fragment>
    );
}

SliderCard.propTypes = {
    isActive: PropTypes.bool.isRequired,
    /** Name of the thermostat */
    name: PropTypes.string.isRequired,
    /** Temperature max */
    max: PropTypes.number,
    /** Temperature min */
    min: PropTypes.number,
    icon: PropTypes.string,
    value: PropTypes.number.isRequired,
    step: PropTypes.number,
    /** callback onchange just click confirm button **/
    shouldConfirm: PropTypes.bool,
    stateLabel: PropTypes.string,
};