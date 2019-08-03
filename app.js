// Rover Object Goes Here
// ======================

// ======================

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft(rover){
  // console.log("turnLeft was called!");
  switch(rover.direction){
  case "N": rover.direction = "W"; break;
  case "W": rover.direction = "S"; break;
  case "S": rover.direction = "E"; break;
  case "E": rover.direction = "N"; break;
}
console.log("Rover turns to " + rover.direction);
}

function turnRight(rover){
  // console.log("turnRight was called!");
  switch(rover.direction){
    case "N": rover.direction = "E"; break;
    case "E": rover.direction = "S"; break;
    case "S": rover.direction = "W"; break;
    case "W": rover.direction = "N"; break;
  }
  console.log("Rover turns to " + rover.direction);
  }


function moveForward(rover){
  //console.log("moveForward was called")
  switch(rover.direction){
    case "N": (rover.y > 0) ? rover.y--: console.log("Out of grid!"); break;
    case "S": (rover.y <10) ? rover.y++: console.log("Out of grid!"); break;
    case "W": (rover.x >0) ? rover.x--: console.log("Out of grid!"); break;
    case "E": (rover.x <10) ? rover.x++: console.log("Out of grid!"); break;
  }
  console.log("Rover Position is " + rover.x + " , " + rover.y)
  rover.travelLog.push(rover.x,rover.y);
  console.log(rover.travelLog);
}


function moveBackward(rover){
  //console.log("moveBackward was called")
  switch(rover.direction){
    case "N": (rover.y <10) ? rover.y++: console.log("Out of grid!"); break;
    case "S": (rover.y >0) ? rover.y--: console.log("Out of grid!"); break;
    case "W": (rover.x <10) ? rover.x++: console.log("Out of grid!"); break;
    case "E": (rover.x >0) ? rover.x--: console.log("Out of grid!"); break;
  }
  console.log("Rover Position is " + rover.x + " , " + rover.y)
  rover.travelLog.push(rover.x, rover.y);
  console.log(rover.travelLog);
}

function listOfCommands(command){
  console.log("Your commands are represented as: (f)orward, (r)ight, (l)eft and (b)ackwards.");
for(let j=0; j<command.length; j++){
  if(command[j] == "l"){
    turnLeft(rover);
  }
  else if(command[j] == "r"){
    turnRight(rover);
  }
  else if(command[j] == "f"){
    moveForward(rover);
}
else if(command[j] == "b"){
  moveBackward(rover)
}
else {
  console.log("Not the right command.")
}
}
}
