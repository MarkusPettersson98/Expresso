
export const daily_Sold = {
    '1/4': {
        day: 'Monday',
        orders: 14
    },
    '2/4': {
        day: 'Tuesday',
        orders: 4
    },
    '3/4': {
        day: 'Wednesday',
        orders: 10
    },
    '4/4': {
        day: 'Thursday',
        orders: 6
    },
    '5/4': {
        day: 'Friday',
        orders: 8
    },
    '6/4': {
        day: 'Saturday',
        orders: 4
    },
    '7/4': {
        day: 'Sunday',
        orders: 1
    }
}

export const currentData = [
    //   date      the height of the graph
    { x: "1/4", y: daily_Sold["1/4"].orders },
    { x: "2/4", y: daily_Sold["2/4"].orders },
    { x: "3/4", y: daily_Sold["3/4"].orders },
    { x: "4/4", y: daily_Sold["4/4"].orders },
    { x: "5/4", y: daily_Sold["5/4"].orders },
    { x: "6/4", y: daily_Sold["6/4"].orders },
    { x: "7/4", y: daily_Sold["7/4"].orders }
];


