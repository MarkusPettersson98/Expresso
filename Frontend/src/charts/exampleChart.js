import React, { useState } from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import { currentData } from '../data/reciepts';

// k
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const example = () => {

    // placeholder to for what to do when clicked on
    // examples, show how the sale went this monday.
    //           compare this monday to other mondays.
    const goToPage = (index) => {
        console.log(weekdays[index]);
    }

    return (  
        <VictoryChart
            domainPadding={30} // determines distance from 
        >
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