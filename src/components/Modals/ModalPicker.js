import React, {useMemo, useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ModalContainer, ModalContent, ModalHeader, ModalStyle, Button} from './Common';
import 'rmc-picker-scroll/assets/index.css';
import Picker from 'rmc-picker-scroll';
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

    const onChangePicker = (value) => {
        if (props.onChange) {
            props.onChange(value);
        }
    };

    const pickerOptionItems = useMemo(()=>{
        return props.options?.map((item,index)=>(
            <Picker.Item value={item.value} key={`${item.value}${index}`}>
                {item.label}
            </Picker.Item>
        ));
    },[props.options]);

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
                    <div style={{width: 150}}>
                        <Picker
                            selectedValue={props.value}
                            onValueChange={onChangePicker}
                        >
                            {pickerOptionItems}
                        </Picker>
                    </div>
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
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    /** callback onchange just click confirm button **/
    shouldConfirm: PropTypes.bool,
};
