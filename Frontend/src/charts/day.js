import React, { useState } from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryLine,
    VictoryAxis,
    VictoryLabel,
} from 'victory';

import { monday } from '../data/reciepts';

const daily = ({backToPage}) => {
    const data = monday.sales.map((sales, index) => {
        return { x: index + monday.openingHour, y: sales };
    });

    const handleClickWeek = () => {
        backToPage();
        console.log('go back button');
    }
    return (
        <div>
            <div>
                <h1>Mondays sale</h1>
                <button onClick={handleClickWeek} >Weekly overview</button>
            </div>
            <div style={{ width: '70%', height: '10%' }}>
                <VictoryChart
                    width = {1000}
                    height = {500}
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
