import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import {ModalContainer, ModalContent, ModalHeader, ModalStyle, Switch, Button} from './Common';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html');


export function ModalSwitch(props) {
    const modalRef = useRef();
    const modalProps = {
        onAfterOpen: () => disableBodyScroll(modalRef.current),
        onAfterClose: () => enableBodyScroll(modalRef.current),
        ref: modalRef,
    };

    const [value, setValue] = useState(props.value);
    const stateLabel = props.stateLabel || (value ? '开启' : '关闭');

    useEffect(() => {
        if (props.show) {
            setValue(props.value);
        }
    }, [props.show]);

    const onToggle = () => {
        setValue(!value);
        if (typeof props.onChange === 'function' && !props.shouldConfirm) {
            props.onChange(!value);
        }
    };

    const onConfirm = () => {
        props.close(false);
        if (typeof props.onChange === 'function') {
            props.onChange(value);
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
                    subtitle={stateLabel}
                    close={props.close}
                    icon={
                        props.icon
                    }
                />
                <ModalContent>
                    <Switch
                        on={value}
                        onToggle={onToggle}
                    />
                    {
                        props.shouldConfirm ?
                            <>
                                <div style={{height: 36}}/>
                                <Button onClick={onConfirm} title={'确认'}/>
                            </> : null
                    }
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
}

ModalSwitch.propTypes = {
    icon: PropTypes.element,
    /** Method to close the modal */
    close: PropTypes.func.isRequired,
    /** Name of the light */
    name: PropTypes.string.isRequired,
    /** Action triggered on toggle switch */
    onChange: PropTypes.func,
    /** State of the light */
    value: PropTypes.bool,
    /** State of the modal */
    show: PropTypes.bool.isRequired,
    /** State label of the light */
    stateLabel: PropTypes.string.isRequired,
    /** callback onchange just click confirm button **/
    shouldConfirm: PropTypes.bool,
};
