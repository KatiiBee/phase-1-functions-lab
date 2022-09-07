// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42
    } else if (someValue < 42) {
        return 42 - someValue
    }

}

function distanceFromHqInFeet (someValue2) {
    return distanceFromHqInBlocks(someValue2) * 264
    //someValue multiplied by 264
}

function distanceTravelledInFeet (startPoint, endPoint) {
    if (startPoint > endPoint) {
        return (startPoint - endPoint) *264
    } else return (endPoint-startPoint) * 264
    //(endpoint -startpoint) * 264 
}

function calculatesFarePrice (start, destination) {
    let someValue3 = distanceTravelledInFeet(start, destination)
    if (someValue3 <= 400) {
        return 0
    } else if (someValue3 > 400 && someValue3<= 2000) {
        return (someValue3 - 400) * .02
    } else if (someValue3 >2000 && someValue3 <2500) {
        return 25
    } else if (someValue3 > 2500) {
        return 'cannot travel that far'
    }

}