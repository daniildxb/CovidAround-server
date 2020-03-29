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
        long: '9.363401',
        lat: '47.419483',
        timestamp: 1585408260,
    },
    {
        user_id: '1111222233334444',
        long: ' 9.365032',
        lat: '47.419904',
        timestamp: 1585408275,
    },
    {
        user_id: '1111222233334444',
        long: '9.365676',
        lat: '47.420485',
        timestamp: 1585408290,
    },
    {
        user_id: '1111222233334444',
        long: '9.367328',
        lat: '47.420340',
        timestamp: 1585408305,
    },
    {
        user_id: '1111222233334444',
        long: '9.369163',
        lat: '47.421073',
        timestamp: 1585408320,
    },
    {
        user_id: '1111222233334444',
        long: '9.371084',
        lat: '47.421952',
        timestamp: 1585408335,
    },
    {
        user_id: '1111222233334444',
        long: '9.370416',
        lat: '47.422168',
        timestamp: 1585408350,
    },
    {
        user_id: '5555666677778888',
        long: '9.368750',
        lat: '47.421247',
        timestamp: 1585408305,
    },
    {
        user_id: '5555666677778888',
        long: '9.369507',
        lat: '47.421192',
        timestamp: 1585408320,
    },
    {
        user_id: '5555666677778888',
        long: '9.370631',
        lat: '47.421649',
        timestamp: 1585408335,
    },
    {
        user_id: '9999000011112222',
        long: '9.371393',
        lat: '47.423144',
        timestamp: 1585408320,
    },
    {
        user_id: '9999000011112222',
        long: '9.370470',
        lat: '47.422338',
        timestamp: 1585408335,
    },
    {
        user_id: '9999000011112222',
        long: '9.370867',
        lat: '47.421765',
        timestamp: 1585408350,
    },
];

const notifications = [
    {
        user_id: '1111222233334444',
        slong: '9.367328',
        slat: '47.420340',
        long: '9.368750',
        lat: '47.421247',
        threat: '1',
        timestamp: 1585408305,
    },
    {
        user_id: '1111222233334444',
        slong: '9.369163',
        slat: '47.421073',
        long: '9.369507',
        lat: '47.421192',
        threat: '1',
        timestamp: 1585408320,
    },
    {
        user_id: '1111222233334444',
        slong: '9.371084',
        slat: '47.421952',
        long: '9.370631',
        lat: '47.421649',
        threat: '1',
        timestamp: 1585408335,
    },
    {
        user_id: '1111222233334444',
        slong: '9.369163',
        slat: '47.421073',
        long: '9.371393',
        lat: '47.423144',
        threat: '2',
        timestamp: 1585408320,
    },
    {
        user_id: '1111222233334444',
        slong: '9.371084',
        slat: '47.421952',
        long: '9.370470',
        lat: '47.422338',
        threat: '2',
        timestamp: 1585408335,
    },
    {
        user_id: '1111222233334444',
        slong: '9.370416',
        slat: '47.422168',
        long: '9.370867',
        lat: '47.421765',
        threat: '2',
        timestamp: 1585408350,
    },
];

module.exports = {
    users,
    locations,
    notifications,
};
