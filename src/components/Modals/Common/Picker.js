import React from 'react';
import {Scroller} from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';

Scroller.settings = {
    theme: 'ios',
    themeVariant: 'light',
};


const wheels = [
    [{
        circular: false,
        data: [{
            display: '关停',
            value: 'off',
        },{
            display: '启动',
            value: 'on',
        },{
            display: '自动',
            value: 'auto',
        }],
    }],
];

export class Picker extends React.Component {

    render() {
        return (
            <Scroller
                value={'auto'}
                display="inline"
                type="hidden"
                height={this.props.height}
                width={150}
                wheels={wheels}
                showLabel={false}
                validate={this.validate}
            />
        );
    }
}
