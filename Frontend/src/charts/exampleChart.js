import React, { useState } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from 'victory';

import { weeklyData } from '../data/reciepts';
import Daily from './monday';

/* eslint react/prop-types: 0 */

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
    const style1 = '#999999';
    const style2 = '#1d7874';
    const [fillcolor, setFillColor] = useState(style1);

    const [style] = useState({
        data: { fill: fillcolor },
    });

    const [dailyGraph, setDailyGraph] = useState();

    // placeholder for reducer who decides what to do when clicked on
    // examples, show how the sale went this monday.
    //           compare this monday to other mondays.
    const goToPage = index => {
        switch (index) {
            case 0:
                setDailyGraph(<Daily />);

            default:
                console.log('Clicked on', weekdays[index]);
        }
    };

    return dailyGraph ? (
        dailyGraph
    ) : (
        <div>
            <body>
                <h1>This weeks sales, click on monday</h1>
            </body>
            <div style={{ width: '70%', height: '50%' }}>
                <VictoryChart domainPadding={50}>
                    <VictoryAxis
                        label="Dagar"
                        tickValues={[1, 2, 3, 4, 5, 6, 7]}
                        tickFormat={[...weekdaysShort]}
                    />

                    <VictoryAxis
                        axisLabelComponent={<VictoryLabel dy={-10} />}
                        label="Sålt kaffe"
                        dependentAxis
                        tickFormat={x => `${x}st`}
                        fixLabelOverlap
                    />
                    <VictoryBar
                        style={style}
                        data={weeklyData}
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
                                                document.body.style.cursor =
                                                    'pointer';
                                                return {
                                                    style: { fill: style2 },
                                                }; // specific to bar hovered.
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
                                                document.body.style.cursor =
                                                    'default';
                                                return {
                                                    style: { fill: style1 },
                                                };
                                            },
                                        },
                                    ],
                                },
                            },
                        ]}
                    />
                </VictoryChart>
            </div>
        </div>
    );
};

export default example;
