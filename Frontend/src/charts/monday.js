import React, { useState } from 'react';
import {
    VictoryChart,
    VictoryTheme,
    VictoryLine,
    VictoryAxis,
    VictoryLabel,
} from 'victory';

import { monday } from '../data/reciepts';

const daily = () => {
    const data = monday.sales.map((sales, index) => {
        return { x: index + monday.openingHour, y: sales };
    });

    return (
        <VictoryChart theme={VictoryTheme.material} minDomain={{ y: 0 }}>
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
    );
};

export default daily;
