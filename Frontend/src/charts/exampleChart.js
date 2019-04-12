import React, { useState } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';
import { currentData } from '../data/reciepts';

// k
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekdays_short = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const example = () => {


    const style_1 = "#f4c095"
    const style_2 = "#1d7874"
    const [fillcolor, setFillColor] = useState(style_1)


    const [style, setStyle] = useState({
        data: { fill: fillcolor }
    });


    // placeholder to for what to do when clicked on
    // examples, show how the sale went this monday.
    //           compare this monday to other mondays.
    const goToPage = (index) => {
        console.log('Clicked on ' + weekdays[index]);
    }

    return (
        <VictoryChart
            domainPadding={30} // determines distance from eachother and "walls"
            style={{
                parent: {
                    border: "6px solid #ccc"
                }
            }}
        >
            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6, 7]} // this could be dynamic dependent on state
                tickFormat={[...weekdays_short]} //spead the array to assign values
                style={{
                    axis: {stroke: "#679289"}
                }}
            />

            <VictoryAxis
                dependentAxis //meaning this is y
                tickFormat={(x) => (`${x}st`)}
                style={{
                    axis: {stroke: "#679289"}
                }}
            />
            <VictoryBar
                style={style} // gets styling from state 
                data={currentData} // fetched from reciepts
                events={[{
                    target: "data",
                    eventHandlers: {
                        onClick: () => {
                            return [{
                                target: "data", // the bars hold an index. we match index with out weekdays array.
                                mutation: (props) => {
                                    goToPage(props.index); // use a reducer to do the next action
                                }
                            }];
                        },
                        onMouseOver: () => {
                            return [
                                {
                                    target: "data",
                                    mutation: () => { // change the color for specific bar on hovering
                                        setFillColor(fillcolor === style_1 ? style_2 : style_1); 
                                        return { style: { fill: style_2 } }; // specific to bar hovered.
                                    }
                                }
                            ];
                        },
                        onMouseOut: () => {
                            return [
                                {
                                    target: "data",
                                    mutation: () => { 
                                        setFillColor(fillcolor === style_2 ? style_1 : style_2);
                                        return { style: { fill: style_1 } };
                                    }
                                }
                            ];
                        }
                    }
                }
                ]}
            />
        </VictoryChart>
    )
}



export default example;