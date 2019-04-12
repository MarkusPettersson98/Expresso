import React, { useState } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

import { currentData } from '../data/reciepts';

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
const weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const example = () => {
    const style1 = '#f4c095';
    const style2 = '#1d7874';
    const [fillcolor, setFillColor] = useState(style1);

    const [style] = useState({
        data: { fill: fillcolor },
    });

    // placeholder to for what to do when clicked on
    // examples, show how the sale went this monday.
    //           compare this monday to other mondays.
    const goToPage = index => {
        console.log('Clicked on ', weekdays[index]);
    };

    return (
        <VictoryChart
            domainPadding={30}
            style={{
                parent: {
                    border: '6px solid #ccc',
                },
            }}
        >
            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6, 7]}
                tickFormat={[...weekdaysShort]}
                style={{
                    axis: { stroke: '#679289' },
                }}
            />

            <VictoryAxis
                dependentAxis
                tickFormat={x => `${x}st`}
                style={{
                    axis: { stroke: '#679289' },
                }}
            />
            <VictoryBar
                style={style}
                data={currentData}
                events={[
                    {
                        target: 'data',
                        eventHandlers: {
                            onClick: () => [
                                {
                                    target: 'data', // the bars hold an index. we match index with out weekdays array.
                                    mutation: props => {
                                        goToPage(props.index); // use a reducer to do the next action
                                    },
                                },
                            ],

                            onMouseOver: () => [
                                {
                                    target: 'data',
                                    mutation: () => {
                                        // change the color for specific bar on hovering
                                        setFillColor(
                                            fillcolor === style1
                                                ? style2
                                                : style1,
                                        );
                                        return { style: { fill: style2 } }; // specific to bar hovered.
                                    },
                                },
                            ],

                            onMouseOut: () => [
                                {
                                    target: 'data',
                                    mutation: () => {
                                        setFillColor(
                                            fillcolor === style2
                                                ? style1
                                                : style2,
                                        );
                                        return { style: { fill: style1 } };
                                    },
                                },
                            ],
                        },
                    },
                ]}
            />
        </VictoryChart>
    );
};

export default example;