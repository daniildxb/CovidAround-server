const users = [
    {
        id: '1111222233334444',
        first_name: 'John',
        last_name: 'Doe',
        threat: 0,
    },
    {
        id: '5555666677778888',
        first_name: 'Michael',
        last_name: 'Smith',
        threat: 1,
    },
    {
        id: '9999000011112222',
        first_name: 'Anna',
        last_name: 'Maria',
        threat: 2,
    },
];

const locations = [
    {
        user_id: '1111222233334444',
        lat: '9.363401',
        long: '47.419483',
        timestamp: 1585408260,
    },
    {
        user_id: '1111222233334444',
        lat: ' 9.365032',
        long: '47.419904',
        timestamp: 1585408275,
    },
    {
        user_id: '1111222233334444',
        lat: '9.365676',
        long: '47.420485',
        timestamp: 1585408290,
    },
    {
        user_id: '1111222233334444',
        lat: '9.367328',
        long: '47.420340',
        timestamp: 1585408305,
    },
    {
        user_id: '1111222233334444',
        lat: '9.369163',
        long: '47.421073',
        timestamp: 1585408320,
    },
    {
        user_id: '1111222233334444',
        lat: '9.371084',
        long: '47.421952',
        timestamp: 1585408335,
    },
    {
        user_id: '1111222233334444',
        lat: '9.370416',
        long: '47.422168',
        timestamp: 1585408350,
    },
    {
        user_id: '5555666677778888',
        lat: '9.368750',
        long: '47.421247',
        timestamp: 1585408305,
    },
    {
        user_id: '5555666677778888',
        lat: '9.369507',
        long: '47.421192',
        timestamp: 1585408320,
    },
    {
        user_id: '5555666677778888',
        lat: '9.370631',
        long: '47.421649',
        timestamp: 1585408335,
    },
    {
        user_id: '9999000011112222',
        lat: '9.371393',
        long: '47.423144',
        timestamp: 1585408320,
    },
    {
        user_id: '9999000011112222',
        lat: '9.370470',
        long: '47.422338',
        timestamp: 1585408335,
    },
    {
        user_id: '9999000011112222',
        lat: '9.370867',
        long: '47.421765',
        timestamp: 1585408350,
    },
];

const notifications = [
    {
        user_id: '1111222233334444',
        sLat: '9.367328',
        sLong: '47.420340',
        lat: '9.368750',
        long: '47.421247',
        threat: '1',
        timestamp: 1585408305,
    },
    {
        user_id: '1111222233334444',
        sLat: '9.369163',
        sLong: '47.421073',
        lat: '9.369507',
        long: '47.421192',
        threat: '1',
        timestamp: 1585408320,
    },
    {
        user_id: '1111222233334444',
        sLat: '9.371084',
        sLong: '47.421952',
        lat: '9.370631',
        long: '47.421649',
        threat: '1',
        timestamp: 1585408335,
    },
    {
        user_id: '1111222233334444',
        sLat: '9.369163',
        sLong: '47.421073',
        lat: '9.371393',
        long: '47.423144',
        threat: '2',
        timestamp: 1585408320,
    },
    {
        user_id: '1111222233334444',
        sLat: '9.371084',
        sLong: '47.421952',
        lat: '9.370470',
        long: '47.422338',
        threat: '2',
        timestamp: 1585408335,
    },
    {
        user_id: '1111222233334444',
        sLat: '9.370416',
        sLong: '47.422168',
        lat: '9.370867',
        long: '47.421765',
        threat: '2',
        timestamp: 1585408350,
    },
];

module.exports = {
    users,
    locations,
    notifications,
};
