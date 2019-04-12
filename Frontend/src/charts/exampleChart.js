import React, { useState } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis} from 'victory';
import { currentData } from '../data/reciepts';

// k
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekdays_short = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const example = () => {

    // placeholder to for what to do when clicked on
    // examples, show how the sale went this monday.
    //           compare this monday to other mondays.
    const goToPage = (index) => {
        console.log(weekdays[index]);
    }

    return (
        <VictoryChart
            domainPadding={30} // determines distance from eachother and "walls"
        >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7]}
          tickFormat={[...weekdays_short]} //spead the array to assign values
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}st`)}
        />
            <VictoryBar
                data={currentData}
                events={[
                    {
                        target: "data",
                        eventHandlers: {
                            onClick: (p) => {
                                return [{
                                    target: "data", // the bars hold an index. we match index with out weekdays array.
                                    mutation: (props) => {
                                        goToPage(props.index);
                                    }
                                }];
                            }
                        }
                    }
                ]}
            />
        </VictoryChart>
    )
}



export default example;