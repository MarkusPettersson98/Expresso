const shops = [
    {
        name: "Biblioteket",
        coordinates: {
            latitude: 57.690382,
            longitude: 11.978556
        }
    },
    {
        name: "Bulten",
        coordinates: {
            latitude: 57.689008,
            longitude: 11.978538
        }
    },
    {
        name: "Linsen",
        coordinates: {
            latitude: 57.687962,
            longitude: 11.978813
        }
    },
    {
        name: "Veras Café",
        coordinates: {
            latitude: 57.693158,
            longitude: 11.975036
        }
    },
    {
        name: "Wijkanders",
        coordinates: {
            latitude: 57.692538,
            longitude: 11.97539
        }
    }
];

const coffee = [
    {
        shop: "Biblioteket",
        coffees: [
            { name: "Bryggkaffe", price: 12, volume: 330, id: 123 },
            { name: "Cappucino", price: 16, volume: 330, id: 321 }
        ]
    },
    {
        shop: "Bulten",
        coffees: [
            { name: "Bryggkaffe", price: 13, volume: 330, id: 123 },
            { name: "Cappucino", price: 17, volume: 330, id: 321 }
        ]
    },
    {
        shop: "Linsen",
        coffees: [
            { name: "Bryggkaffe", price: 14, volume: 330, id: 123 },
            { name: "Cappucino", price: 18, volume: 330, id: 321 }
        ]
    },
    {
        shop: "Vera café",
        coffees: [
            { name: "Bryggkaffe", price: 15, volume: 330, id: 123 },
            { name: "Cappucino", price: 19, volume: 330, id: 321 }
        ]
    },
    {
        shop: "Bulten",
        coffees: [
            { name: "Bryggkaffe", price: 16, volume: 330, id: 123 },
            { name: "Cappucino", price: 20, volume: 330, id: 321 }
        ]
    }
];

module.exports = {
    shops: shops,
    coffee: coffee
};
