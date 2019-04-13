export const dailySold = {
    '1/4': {
        day: 'Monday',
        orders: 14,
    },
    '2/4': {
        day: 'Tuesday',
        orders: 4,
    },
    '3/4': {
        day: 'Wednesday',
        orders: 10,
    },
    '4/4': {
        day: 'Thursday',
        orders: 6,
    },
    '5/4': {
        day: 'Friday',
        orders: 8,
    },
    '6/4': {
        day: 'Saturday',
        orders: 4,
    },
    '7/4': {
        day: 'Sunday',
        orders: 1,
    },
};

export const weeklyData = [
    //   date      the height of the graph
    { x: '1/4', y: dailySold['1/4'].orders },
    { x: '2/4', y: dailySold['2/4'].orders },
    { x: '3/4', y: dailySold['3/4'].orders },
    { x: '4/4', y: dailySold['4/4'].orders },
    { x: '5/4', y: dailySold['5/4'].orders },
    { x: '6/4', y: dailySold['6/4'].orders },
    { x: '7/4', y: dailySold['7/4'].orders },
];

export const monday = {
    openingHour: 8,
    sales: [
        /*'8'  :*/ 40,
        /*'9'  :*/ 50,
        /*'10' :*/ 100,
        /*'11' :*/ 80,
        /*'12' :*/ 150,
        /*'13' :*/ 60,
        /*'14' :*/ 100,
        /*'15' :*/ 30,
        /*'16' :*/ 20,
        /*'17' :*/ 20,
        /*'18' :*/ 40,
    ],
};
