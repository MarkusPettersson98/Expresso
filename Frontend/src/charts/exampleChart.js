import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import dailySold from '../data/reciepts';

const [MON, TUE, WED, THU, FRI, SAT, SUN] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const example = () => {

    const goToPage = (day) => {
        switch (day) {
            case MON:
                console.log('MON');
                break;
            case TUE:
                console.log('TUE');
                break;
            case WED:
                console.log('WED');
                break;
            case THU:
                console.log('THU');
                break;
            case FRI:
                console.log('FRI');
                break;
            default:
                console.log('weekend');
        }
    }
    return (
        <VictoryChart
            domainPadding={30}
        >
            <VictoryBar
                data={[
                    { x: "1/4", y: dailySold["1/4"].orders, label: MON },
                    { x: "2/4", y: dailySold["2/4"].orders, label: TUE },
                    { x: "3/4", y: dailySold["3/4"].orders, label: WED },
                    { x: "4/4", y: dailySold["4/4"].orders, label: THU },
                    { x: "5/4", y: dailySold["5/4"].orders, label: FRI },
                ]}
                events={[
                    {
                        target: "data",
                        eventHandlers: {
                            onClick: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        goToPage(props.text);
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