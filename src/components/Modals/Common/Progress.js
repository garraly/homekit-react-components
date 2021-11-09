import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';

export function Progress(props) {
  return (
    <div
      style={{
        width: '250px',
        height: '250px',
      }}
    >
      <svg style={{height: 0, width: 0}}>
        <defs>
          <linearGradient
            id={'gradientId'}
            gradientTransform={`rotate(90)`}
          >
            <stop offset="0%" stopColor={"#75D5E2"}/>
            <stop offset="100%" stopColor={"#ED6C35"}/>
          </linearGradient>
        </defs>
      </svg>
      <CircularProgressbar strokeWidth={24} value={props.value} minValue={props.tempMin} maxValue={props.tempMax}
                           styles={{path: {stroke: `url(#gradientId)`, height: '100%'}}}/>
    </div>
  );
}

Progress.propTypes = {
    tempMax: PropTypes.number,
    tempMin: PropTypes.number,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string,
};
