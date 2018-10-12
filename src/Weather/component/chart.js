import React from "react";
import {Area, AreaChart, Label, Tooltip, XAxis, YAxis} from "recharts";
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <AreaChart width={300} height={170} data={props.data}>
                <Area type="monotone" dataKey={props.dataKey} stroke={props.color} fill={props.color}
                      unit={props.units}/>
                <XAxis>
                    {/* <Label value={average(props.data.map(data => data[props.dataKey]))}  offset={-10} position="insideBottom" />*/}
                </XAxis>
                <YAxis unit={props.units}/>
                <Tooltip/>
            </AreaChart>
            <div className={'graph_legend'}>
                {average(props.data.map(data => data[props.dataKey]))} {props.units}
            </div>
        </div>

    )
}