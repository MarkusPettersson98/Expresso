export const days = {
    monday: {
        openingHour: 8,
        sales: [40, 50, 100, 80, 150, 60, 100, 30, 20, 20, 40],
    },
    tuesday: {
        openingHour: 8,
        sales: [140, 50, 10, 60, 120, 111, 100, 69, 20, 60, 40],
    },
    wednesday: {
        openingHour: 8,
        sales: [60, 60, 60, 60, 60, 40, 60, 30, 60, 100, 60],
    },
    thursday: {
        openingHour: 8,
        sales: [52, 82, 52, 82, 52, 52, 92, 52, 52, 52, 52],
    },
    friday: {
        openingHour: 8,
        sales: [80, 20, 80, 80, 80, 80, 80, 80, 40, 80, 80],
    },
    saturday: {
        openingHour: 8,
        sales: [50, 50, 50, 50, 50, 100, 50, 50, 30, 50, 20],
    },
    sunday: {
        openingHour: 10,
        sales: [70, 70, 70, 20, 70, 90, 70, 70, 70, 30, 70],
    },
};

const sumOfDay = day => day.sales.reduce((a, b) => a + b, 0);

export const weeklyData = [
    //   date      the height of the graph
    { x: '1/4', y: sumOfDay(days.tuesday) },
    { x: '2/4', y: sumOfDay(days.tuesday) },
    { x: '3/4', y: sumOfDay(days.wednesday) },
    { x: '4/4', y: sumOfDay(days.thursday) },
    { x: '5/4', y: sumOfDay(days.friday) },
    { x: '6/4', y: sumOfDay(days.saturday) },
    { x: '7/4', y: sumOfDay(days.sunday) },
];
