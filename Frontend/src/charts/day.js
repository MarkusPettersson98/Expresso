import React, { useState } from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryLine,
    VictoryAxis,
    VictoryLabel,
} from 'victory';

import { days } from '../data/reciepts';

const daily = ({ backToPage, daySelected }) => {

    const data = days[daySelected].sales.map((sales, index) => {
        return { x: index + days[daySelected].openingHour, y: sales };
    });

    const handleClickWeek = () => {
        backToPage();
    };
    return (
        <div>
            <div>
                <h1>{daySelected}'s sale</h1>
                <button onClick={handleClickWeek}>Weekly overview</button>
            </div>
            <div style={{ width: '70%', height: '10%' }}>
                <VictoryChart
                    width={1000}
                    height={500}
                    theme={VictoryTheme.material}
                    minDomain={{ y: 0 }}
                >
                    <VictoryAxis
                        label="Sålt kaffe"
                        dependentAxis
                        axisLabelComponent={<VictoryLabel dy={-30} />}
                    />
                    <VictoryAxis
                        label="Klockan"
                        axisLabelComponent={<VictoryLabel dy={30} />}
                    />
                    <VictoryLine data={data} />
                </VictoryChart>
            </div>
        </div>
    );
};

export default daily;
