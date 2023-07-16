// Code your solution in this file!
function index.js()

function distanceFromHqInBlocks(distanceInBlocks) {
    
    if (distanceInBlocks>42) {
        return (distanceInBlocks - 42);
    }
    else{
        return (42 - distanceInBlocks);
    }
  
}

function distanceFromHqInFeet(distanceInBlocks) {
    
    if (distanceFromHqInBlocks>42) {
    return (distanceFromHqInBlocks - 42) * 264;
    }
    else{
        return (42 - distanceFromHqInBlocks) * 264;

    }
}

function distanceTravelledInFeet(start, destination) {

    if (destination>start) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}    

function calculateFarePrice(start, destination) {
let distance =distanceTravelledInFeet(start, destination);

if (distance>=400) {
    return (0);
     }
if (distance>400 && distance<=2000) {
    return (distance - 400) * 0.02;
}

else if (distance>=2000 && distance<=2500) {
    return (25);
}
}