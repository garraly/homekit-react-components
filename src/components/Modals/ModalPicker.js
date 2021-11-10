import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ModalContainer, ModalContent, ModalHeader, ModalStyle} from './Common';
import Picker from 'react-mobile-picker';
import {Button} from './Common/Button';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html');


export function ModalPicker(props) {
    const modalRef = useRef();
    const modalProps = {
        onAfterOpen: () => disableBodyScroll(modalRef.current),
        onAfterClose: () => enableBodyScroll(modalRef.current),
        ref: modalRef,
    };

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
            {...modalProps}
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
                        valueGroups={props.value}
                        onChange={onChangePicker} />
                    {
                        props.shouldConfirm?
                            <>
                                <div style={{height: 36}}/>
                                <Button onClick={()=>{}} title={'确认'}/>
                            </> : null
                    }
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
}

ModalPicker.propTypes = {
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
    value: PropTypes.object.isRequired,
    optionGroups: PropTypes.object.isRequired,
    /** callback onchange just click confirm button **/
    shouldConfirm: PropTypes.bool,
};
