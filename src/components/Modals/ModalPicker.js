import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ModalContainer, ModalContent, ModalHeader, ModalStyle} from './Common';
import Picker from 'react-mobile-picker';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html');


export function ModalNumber(props) {

    const onChangePicker = (name, value) => {
        if (props.onChange) {
            props.onChange(name, value);
        }
    };

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
                    <Picker
                        height={100}
                        optionGroups={props.optionGroups}
                        valueGroups={props.valueGroups}
                        onChange={onChangePicker} />
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
    value: PropTypes.number.isRequired,
    optionGroups: PropTypes.object,
    valueGroups: PropTypes.object,
};
