const customerRide = {
    riderId: 'XC1452',
    walletBalance: 58960,
    totalDistanceInKm: 5.658,
    dateOfTravel: new Date('02-02-2023'),
    lastTravelledOn: undefined,
    previousDues: Infinity,
    uniqueRegex: /.*/,
}

function calculateFare() {
    const clone = JSON.parse(JSON.stringify(this))
    clone.walletBalance -= 5.5
    console.log(
        `The rider traveled on date ${clone.dateOfTravel} and has wallet balance of ${clone.walletBalance} and has last traveled on ${clone.lastTravelledOn}`
    )
}

const bindedCalculateFare = calculateFare.bind(customerRide)
bindedCalculateFare()
