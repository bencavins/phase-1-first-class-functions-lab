// Code your solution in this file!
const returnFirstTwoDrivers = (list) => list.slice(0, 2);

const returnLastTwoDrivers = (list) => list.slice(list.length-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return (fare) => fare * x;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
}