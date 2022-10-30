function distanceFromHqInBlocks(startingStreet){
  return Math.abs(startingStreet - 42);
}

function distanceFromHqInFeet(startingStreet){
  return distanceFromHqInBlocks(startingStreet) * 264;
}

function distanceTravelledInFeet(startingStreet,endingStreet){
  return Math.abs(startingStreet - endingStreet) * 264;
}

function calculatesFarePrice(start,destination){
  let feetToTravel = distanceTravelledInFeet(start,destination);
  let charge;
  if(feetToTravel <= 400) {
    charge = 0;
  } else if(feetToTravel > 400 && feetToTravel <= 2000) {
    charge = (feetToTravel - 400) * .02;
  } else if(feetToTravel > 2000 && feetToTravel <= 2500) {
    charge = 25;
  } else {
    return 'cannot travel that far'
  }
  return charge;
}