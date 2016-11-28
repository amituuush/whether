import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function max(data) {
  return _.round(_.max(data));
}

function min(data) {
  return _.round(_.min(data));
}

export default (props) => {
  return (
    <div>
      <div className="sparklines-container">
        <Sparklines height={120} width={180} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesSpots />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
      <div className="city-stats-container">
        <div>min: {min(props.data)}{props.units}</div>
        <div>max: {max(props.data)}{props.units}</div>
        {/* <div>avg: {average(props.data)} {props.units}</div> */}
      </div>
    </div>
  );
}
