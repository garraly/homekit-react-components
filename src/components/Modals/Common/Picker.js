import React from 'react';
import PropTypes from 'prop-types';
import RmcPicker from 'rmc-picker-scroll';

export function Picker(props) {

    return (
        <RmcPicker
            selectedValue={props.value}
            disabled={false}
            onValueChange={(value) => {
                if (typeof props.onChange == 'function') {
                    props.onChange(value);
                }
            }}
        >
            {
                props.data.map((item) => (
                    <RmcPicker.Item value={item.value} key={item.value}>
                        {item.label}
                    </RmcPicker.Item>
                ))
            }
            <RmcPicker.Item value={'on'} key={'2'}>
                on
            </RmcPicker.Item>
            <RmcPicker.Item value={'auto'} key={'3'}>
                auto
            </RmcPicker.Item>
        </RmcPicker>
    );
}

Picker.propTypes = {
    /** Action triggered on slider change */
    onChange: PropTypes.func.isRequired,
    /** Value of the picker */
    value: PropTypes.string.isRequired,
    /** Height of the container */
    height: PropTypes.number,
    /** Data of the picker */
    data: PropTypes.array.isRequired,
};